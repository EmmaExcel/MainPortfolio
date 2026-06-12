import { useEffect } from 'react';

export const Home = () => {
  useEffect(() => {
    const container = document.getElementById('threejs-container-ANIMATION_11');
    if (!container || window.THREE === undefined) return;
    
    const width = container.clientWidth || window.innerWidth / 2;
    const height = container.clientHeight || 600;

    const scene = new window.THREE.Scene();
    const camera = new window.THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new window.THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    const geometry = new window.THREE.IcosahedronGeometry(2, 0);
    const wireframe = new window.THREE.WireframeGeometry(geometry);
    const material = new window.THREE.LineBasicMaterial({ 
        color: 0xffffff, 
        transparent: true, 
        opacity: 0.15,
        blending: window.THREE.AdditiveBlending 
    });
    const line = new window.THREE.LineSegments(wireframe, material);
    scene.add(line);

    const coreGeom = new window.THREE.IcosahedronGeometry(1.95, 0);
    const coreMat = new window.THREE.MeshPhongMaterial({
        color: 0x000000,
        emissive: 0x111111,
        specular: 0xffffff,
        shininess: 100,
        transparent: true,
        opacity: 0.8
    });
    const core = new window.THREE.Mesh(coreGeom, coreMat);
    scene.add(core);

    const ambientLight = new window.THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const pointLight = new window.THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 6;

    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
        mouseX = (e.clientX / window.innerWidth) - 0.5;
        mouseY = (e.clientY / window.innerHeight) - 0.5;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId;
    const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        
        line.rotation.y += 0.002;
        line.rotation.x += 0.001;
        core.rotation.y += 0.002;
        core.rotation.x += 0.001;
        
        scene.rotation.x += (mouseY * 0.1 - scene.rotation.x) * 0.05;
        scene.rotation.y += (mouseX * 0.1 - scene.rotation.y) * 0.05;
        
        renderer.render(scene, camera);
    };

    const handleResize = () => {
        const w = container.clientWidth || window.innerWidth / 2;
        const h = container.clientHeight || 600;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    animate();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section className="min-h-[819px] flex flex-col justify-center relative fade-in-up">
      <p className="font-label-mono text-label-mono text-on-surface-variant mb-4 uppercase tracking-widest">Portfolio 2023</p>
      <h1 className="font-display-xl text-display-xl text-primary font-extrabold tracking-tighter leading-none mb-8 max-w-4xl break-words md:text-[120px] text-headline-lg-mobile">
        FULL-STACK, MOBILE &amp; AI ENGINEER
      </h1>
      <h2 className="font-headline-md text-headline-md text-on-surface-variant max-w-3xl mb-12">
        CRAFTING <span className="text-primary font-bold">SCALABLE SOLUTIONS</span> FOR WEB, MOBILE &amp; INTELLIGENT AUTOMATION.
      </h2>
      <div className="max-w-lg mb-16">
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          Welcome to my space on the web. I enjoy solving problems and learning while building. I focus on writing clean, efficient code and creating products that feel simple but work well.
        </p>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[600px] hidden lg:block opacity-80 pointer-events-none">
        <div className="absolute inset-0 w-full h-full" style={{ display: 'block' }}>
          <div id="threejs-container-ANIMATION_11" style={{ width: '100%', height: '100%' }}></div>
        </div>
      </div>
    </section>
  );
};
