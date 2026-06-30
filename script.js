const canvas = document.querySelector("#mushroom-canvas");
const root = document.documentElement;
const projectNodes = [...document.querySelectorAll(".project-drop")];

const clamp = (value, min = 0, max = 1) => Math.min(Math.max(value, min), max);
const fadeRange = (value, start, end) => clamp((value - start) / (end - start));
const lerp = (a, b, t) => a + (b - a) * t;

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0xfbf7ed, 0.045);

const camera = new THREE.PerspectiveCamera(36, window.innerWidth / window.innerHeight, 0.1, 80);
const renderer = new THREE.WebGLRenderer({
  canvas,
  alpha: true,
  antialias: true,
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;

const hemi = new THREE.HemisphereLight(0xffffff, 0xd6cbb6, 1.7);
scene.add(hemi);

const key = new THREE.DirectionalLight(0xffffff, 2.8);
key.position.set(-4, 7, 8);
scene.add(key);

const rimLight = new THREE.DirectionalLight(0xfff1d0, 1.6);
rimLight.position.set(5, 4, -3);
scene.add(rimLight);

const fill = new THREE.PointLight(0xdcc9ff, 1.8, 12);
fill.position.set(2.8, 1.2, 3.2);
scene.add(fill);

const mushroom = new THREE.Group();
scene.add(mushroom);

const materials = {
  cap: new THREE.MeshPhysicalMaterial({
    color: 0xf1e5d2,
    roughness: 0.28,
    metalness: 0,
    transmission: 0.18,
    thickness: 0.55,
    clearcoat: 0.55,
    clearcoatRoughness: 0.2,
    side: THREE.DoubleSide,
  }),
  gill: new THREE.MeshPhysicalMaterial({
    color: 0xf7ead3,
    roughness: 0.34,
    transmission: 0.08,
    thickness: 0.18,
    transparent: true,
    opacity: 1,
    side: THREE.DoubleSide,
  }),
  rim: new THREE.MeshPhysicalMaterial({
    color: 0x17151a,
    roughness: 0.18,
    metalness: 0,
    clearcoat: 0.75,
    clearcoatRoughness: 0.14,
  }),
  stem: new THREE.MeshPhysicalMaterial({
    color: 0xeee4d3,
    roughness: 0.52,
    clearcoat: 0.24,
  }),
  ink: new THREE.MeshPhysicalMaterial({
    color: 0x6d54a4,
    roughness: 0.04,
    metalness: 0,
    transmission: 0.28,
    thickness: 0.35,
    clearcoat: 1,
    clearcoatRoughness: 0.03,
  }),
  amber: new THREE.MeshPhysicalMaterial({
    color: 0xcaa36a,
    roughness: 0.08,
    transmission: 0.36,
    thickness: 0.32,
    clearcoat: 1,
    clearcoatRoughness: 0.04,
  }),
};

const capSegments = 96;
const capRings = 18;
const capPositions = [];
const capIndices = [];
const capUvs = [];

for (let r = 0; r <= capRings; r += 1) {
  const v = r / capRings;
  const radius = lerp(0.08, 2.78, v);
  for (let s = 0; s <= capSegments; s += 1) {
    const u = s / capSegments;
    const theta = u * Math.PI * 2;
    const oval = 1 + Math.sin(theta - 0.55) * 0.16 + Math.cos(theta * 2.0) * 0.06;
    const x = Math.cos(theta) * radius * oval;
    const z = Math.sin(theta) * radius * (0.55 + v * 0.12);
    const arch = 1.08 * (1 - v ** 1.85);
    const ripples = Math.sin(theta * 18) * 0.025 * v;
    const y = 3.05 + arch + ripples - v * 0.22;
    capPositions.push(x, y, z);
    capUvs.push(u, v);
  }
}

for (let r = 0; r < capRings; r += 1) {
  for (let s = 0; s < capSegments; s += 1) {
    const a = r * (capSegments + 1) + s;
    const b = a + capSegments + 1;
    capIndices.push(a, b, a + 1, b, b + 1, a + 1);
  }
}

const capGeometry = new THREE.BufferGeometry();
capGeometry.setAttribute("position", new THREE.Float32BufferAttribute(capPositions, 3));
capGeometry.setAttribute("uv", new THREE.Float32BufferAttribute(capUvs, 2));
capGeometry.setIndex(capIndices);
capGeometry.computeVertexNormals();
const capMesh = new THREE.Mesh(capGeometry, materials.cap);
capMesh.rotation.z = -0.08;
mushroom.add(capMesh);

const curlPositions = capPositions.slice();
const updateCapCurl = (curl) => {
  const pos = capGeometry.attributes.position;
  for (let r = 0; r <= capRings; r += 1) {
    const v = r / capRings;
    for (let s = 0; s <= capSegments; s += 1) {
      const i = r * (capSegments + 1) + s;
      const base = i * 3;
      const theta = (s / capSegments) * Math.PI * 2;
      const edge = Math.max(0, (v - 0.58) / 0.42);
      const frontBias = 0.58 + Math.sin(theta - 0.4) * 0.42;
      const lift = curl * edge ** 1.8 * (0.58 + frontBias) * 1.15;
      const pinch = 1 - curl * edge * 0.18;
      pos.array[base] = curlPositions[base] * pinch;
      pos.array[base + 1] = curlPositions[base + 1] + lift;
      pos.array[base + 2] = curlPositions[base + 2] * (1 - curl * edge * 0.1);
    }
  }
  pos.needsUpdate = true;
  capGeometry.computeVertexNormals();
};

const rimCurve = new THREE.EllipseCurve(0, 0, 2.78, 1.83, 0, Math.PI * 2);
const rimPoints = rimCurve.getPoints(160).map((p, i) => {
  const theta = (i / 160) * Math.PI * 2;
  return new THREE.Vector3(p.x * (1 + Math.sin(theta - 0.55) * 0.16), 2.86, p.y);
});
const rimMesh = new THREE.Mesh(
  new THREE.TubeGeometry(new THREE.CatmullRomCurve3(rimPoints, true), 160, 0.035, 10, true),
  materials.rim
);
rimMesh.rotation.z = -0.08;
mushroom.add(rimMesh);

const gillGroup = new THREE.Group();
for (let i = 0; i < 54; i += 1) {
  const theta = (i / 54) * Math.PI * 2;
  const endR = 2.5 + Math.sin(theta * 3) * 0.12;
  const start = new THREE.Vector3(Math.cos(theta) * 0.18, 2.98, Math.sin(theta) * 0.1);
  const mid = new THREE.Vector3(Math.cos(theta) * 1.25, 2.82, Math.sin(theta) * 0.76);
  const end = new THREE.Vector3(Math.cos(theta) * endR, 2.72, Math.sin(theta) * endR * 0.62);
  const curve = new THREE.CatmullRomCurve3([start, mid, end]);
  const gill = new THREE.Mesh(new THREE.TubeGeometry(curve, 24, 0.009, 5), materials.gill);
  gill.rotation.z = -0.08;
  gillGroup.add(gill);
}
mushroom.add(gillGroup);

const stemCurve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(-0.18, -5.2, 0.02),
  new THREE.Vector3(-0.06, -2.4, 0.02),
  new THREE.Vector3(0.08, 0.1, -0.03),
  new THREE.Vector3(0.02, 2.78, 0.01),
]);
const stem = new THREE.Mesh(new THREE.TubeGeometry(stemCurve, 96, 0.22, 22), materials.stem);
mushroom.add(stem);

const ring = new THREE.Mesh(
  new THREE.TorusGeometry(0.34, 0.055, 10, 64),
  materials.stem
);
ring.position.set(-0.02, 0.2, 0.02);
ring.rotation.x = Math.PI / 2.2;
ring.scale.set(1.15, 0.55, 0.85);
mushroom.add(ring);

const dropletGroup = new THREE.Group();
mushroom.add(dropletGroup);

function addDrop(x, y, z, scale, material, thread = true) {
  const group = new THREE.Group();
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.13, 24, 24), material);
  bulb.scale.set(0.75, 1.18, 0.75);
  bulb.position.y = -0.18 * scale;
  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.28, 24), material);
  tip.position.y = 0.05 * scale;
  tip.rotation.x = Math.PI;
  group.add(bulb, tip);
  if (thread) {
    const line = new THREE.Mesh(
      new THREE.CylinderGeometry(0.008, 0.014, 0.9 * scale, 8),
      material
    );
    line.position.y = 0.42 * scale;
    group.add(line);
  }
  group.position.set(x, y, z);
  group.scale.setScalar(scale);
  group.userData.baseY = y;
  dropletGroup.add(group);
  return group;
}

[
  [1.35, 2.38, 0.64, 0.9, materials.ink],
  [1.75, 1.72, 0.46, 1.28, materials.ink],
  [2.13, 2.22, -0.08, 0.65, materials.ink],
  [2.45, 1.5, -0.22, 0.72, materials.amber],
  [0.92, 1.92, 0.72, 0.55, materials.ink],
  [1.15, 0.92, 0.38, 0.5, materials.amber],
].forEach((args) => addDrop(...args));

for (let i = 0; i < 42; i += 1) {
  const dot = new THREE.Mesh(
    new THREE.SphereGeometry(0.018 + Math.random() * 0.018, 8, 8),
    i % 4 === 0 ? materials.amber : materials.ink
  );
  dot.position.set(
    0.6 + Math.random() * 2.2,
    0.55 + Math.random() * 2.0,
    -0.28 + Math.random() * 1.1
  );
  dot.userData.baseY = dot.position.y;
  dropletGroup.add(dot);
}

const rootPad = new THREE.Mesh(
  new THREE.CylinderGeometry(1.2, 1.45, 0.18, 64),
  new THREE.MeshPhysicalMaterial({ color: 0xd6d9c6, roughness: 0.8 })
);
rootPad.position.set(-0.18, -5.42, 0);
rootPad.scale.z = 0.46;
mushroom.add(rootPad);

const nodePositions = projectNodes.map((node) => ({
  element: node,
  focus: Number(node.dataset.focus),
  position: new THREE.Vector3(
    Number(node.dataset.x),
    Number(node.dataset.y),
    Number(node.dataset.z)
  ),
}));

let scroll = 0;
let targetScroll = 0;

const setTargetScroll = () => {
  const max = Math.max(document.body.scrollHeight - window.innerHeight, 1);
  targetScroll = clamp(window.scrollY / max);
};

const updateCamera = () => {
  const angle = targetScroll * Math.PI * 3.45 - 0.72;
  const height = lerp(4.25, -4.2, targetScroll);
  const radius = lerp(5.4, 4.1, targetScroll);
  const focusY = lerp(3.4, -4.55, targetScroll);

  camera.position.set(Math.sin(angle) * radius, height, Math.cos(angle) * radius);
  camera.lookAt(0.05, focusY, 0);
  camera.fov = lerp(24, 36, fadeRange(targetScroll, 0.1, 0.78));
  camera.updateProjectionMatrix();

  const copyIn = fadeRange(targetScroll, 0.1, 0.23);
  const copyOut = fadeRange(targetScroll, 0.42, 0.56);
  root.style.setProperty("--copy", (copyIn * (1 - copyOut)).toFixed(4));
};

const projectToScreen = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  nodePositions.forEach(({ element, focus, position }) => {
    const projected = position.clone().project(camera);
    const x = projected.x * width * 0.5;
    const y = -projected.y * height * 0.5;
    const distance = Math.abs(targetScroll - focus);
    const active = clamp(1 - distance / 0.075);
    const opacity = clamp(1 - distance / 0.15);
    element.style.setProperty("--screen-x", `${x.toFixed(1)}px`);
    element.style.setProperty("--screen-y", `${y.toFixed(1)}px`);
    element.style.setProperty("--node-active", active.toFixed(4));
    element.style.setProperty("--node-opacity", opacity.toFixed(4));
    element.style.zIndex = String(Math.round(active * 20) + 4);
  });
};

const animate = () => {
  requestAnimationFrame(animate);
  scroll += (targetScroll - scroll) * 0.08;
  const curl = fadeRange(scroll, 0.1, 0.42);
  updateCapCurl(curl);
  rimMesh.scale.y = 1 + curl * 0.18;
  rimMesh.position.y = curl * 0.16;
  gillGroup.visible = curl > 0.04;
  gillGroup.children.forEach((gill, index) => {
    gill.material.opacity = clamp((curl - 0.04) * 1.4);
    gill.scale.y = 1 + curl * 0.12 + Math.sin(index) * 0.02;
  });
  dropletGroup.visible = scroll > 0.22;
  dropletGroup.children.forEach((drop, index) => {
    drop.position.y = drop.userData.baseY + Math.sin(performance.now() * 0.001 + index) * 0.018;
  });
  updateCamera();
  projectToScreen();
  renderer.render(scene, camera);
};

const resize = () => {
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  projectToScreen();
};

setTargetScroll();
updateCamera();
resize();
animate();
window.addEventListener("scroll", setTargetScroll, { passive: true });
window.addEventListener("resize", resize);
