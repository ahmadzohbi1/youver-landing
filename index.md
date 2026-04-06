<!DOCTYPE html>

<html class="scroll-smooth" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Wali | Automate your WhatsApp Business</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&amp;family=Inter:wght@400;500;600&amp;family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "background": "#fcf9f8",
                    "on-tertiary-fixed": "#0c2003",
                    "secondary-container": "#8cf1e1",
                    "outline": "#6c7b6b",
                    "primary-container": "#25d366",
                    "surface-container-lowest": "#ffffff",
                    "surface-container-high": "#ebe7e7",
                    "on-surface-variant": "#3c4a3d",
                    "on-error": "#ffffff",
                    "on-error-container": "#93000a",
                    "surface-container-low": "#f6f3f2",
                    "inverse-primary": "#3de273",
                    "primary-fixed-dim": "#3de273",
                    "secondary": "#006b5f",
                    "on-secondary-container": "#006f64",
                    "on-secondary-fixed-variant": "#005047",
                    "on-secondary-fixed": "#00201c",
                    "surface-bright": "#fcf9f8",
                    "on-tertiary-container": "#384f2a",
                    "surface-dim": "#dcd9d9",
                    "on-tertiary-fixed-variant": "#364d29",
                    "tertiary-fixed-dim": "#b4cf9f",
                    "on-background": "#1c1b1b",
                    "surface": "#fcf9f8",
                    "on-primary-fixed-variant": "#005322",
                    "on-surface": "#1c1b1b",
                    "inverse-on-surface": "#f3f0ef",
                    "on-tertiary": "#ffffff",
                    "outline-variant": "#bbcbb9",
                    "tertiary-fixed": "#cfebba",
                    "on-primary-container": "#005523",
                    "primary": "#006d2f",
                    "surface-tint": "#006d2f",
                    "tertiary": "#4d653e",
                    "inverse-surface": "#313030",
                    "on-secondary": "#ffffff",
                    "error": "#ba1a1a",
                    "on-primary-fixed": "#002109",
                    "on-primary": "#ffffff",
                    "error-container": "#ffdad6",
                    "surface-container-highest": "#e5e2e1",
                    "surface-container": "#f0edec",
                    "tertiary-container": "#a5c092",
                    "secondary-fixed-dim": "#72d8c8",
                    "primary-fixed": "#66ff8e",
                    "secondary-fixed": "#8ff4e3",
                    "surface-variant": "#e5e2e1"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "1rem",
                    "xl": "1.5rem",
                    "full": "9999px"
            },
            "fontFamily": {
                    "headline": ["Plus Jakarta Sans"],
                    "body": ["Inter"],
                    "label": ["Inter"]
            }
          },
        }
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        .emerald-gradient {
            background: linear-gradient(135deg, #006d2f 0%, #25d366 100%);
        }
        .hero-pattern {
            background-image: radial-gradient(#25d366 0.5px, transparent 0.5px);
            background-size: 24px 24px;
            opacity: 0.1;
        }
        .glass-card {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .floating {
            animation: floating 3s ease-in-out infinite;
        }
        @keyframes floating {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
        }
    </style>
</head>
<body class="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(28,27,27,0.04)]">
<div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
<div class="flex items-center gap-8">
<a class="text-2xl font-bold tracking-tighter text-[#1c1b1b] dark:text-[#fcf9f8] flex items-center gap-2" href="#">
<span class="material-symbols-outlined text-primary text-3xl" style="font-variation-settings: 'FILL' 1;">chat_bubble</span>
<span>Wali</span>
</a>
<div class="hidden md:flex items-center gap-6">
<a class="text-[#1c1b1b] dark:text-[#fcf9f8] opacity-70 hover:text-[#006d2f] transition-colors font-['Plus_Jakarta_Sans'] font-bold tracking-tight" href="#features">Features</a>
<a class="text-[#1c1b1b] dark:text-[#fcf9f8] opacity-70 hover:text-[#006d2f] transition-colors font-['Plus_Jakarta_Sans'] font-bold tracking-tight" href="#pricing">Pricing</a>
<a class="text-[#1c1b1b] dark:text-[#fcf9f8] opacity-70 hover:text-[#006d2f] transition-colors font-['Plus_Jakarta_Sans'] font-bold tracking-tight" href="#use-cases">Use Cases</a>
<a class="text-[#1c1b1b] dark:text-[#fcf9f8] opacity-70 hover:text-[#006d2f] transition-colors font-['Plus_Jakarta_Sans'] font-bold tracking-tight" href="#">Resources</a>
</div>
</div>
<div class="flex items-center gap-4">
<button class="hidden sm:block text-[#1c1b1b] dark:text-[#fcf9f8] opacity-70 hover:text-[#006d2f] transition-colors font-bold">Login</button>
<button class="emerald-gradient text-on-primary px-6 py-2.5 rounded-lg font-bold shadow-lg shadow-primary/20 hover:scale-95 duration-200 transition-transform">Start Free Trial</button>
</div>
</div>
</nav>
<main class="pt-24">
<!-- Redesigned Hero Section -->
<section class="relative min-h-[90vh] flex items-center overflow-hidden">
<!-- Abstract background elements -->
<div class="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 origin-top-right -z-10"></div>
<div class="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 blur-[120px] rounded-full -z-10"></div>
<div class="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary-container/20 blur-[150px] rounded-full -z-10"></div>
<div class="max-w-7xl mx-auto px-6 w-full py-12 lg:py-24">
<div class="grid lg:grid-cols-12 gap-12 items-center">
<!-- Left Content -->
<div class="lg:col-span-7 space-y-8 relative z-10">
<div class="inline-flex items-center gap-2 px-4 py-2 bg-white shadow-sm border border-outline-variant/30 rounded-full text-sm font-bold text-primary">
<span class="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                    Next-Gen AI Automation
                </div>
<h1 class="text-6xl lg:text-8xl font-headline font-extrabold tracking-tight text-on-surface leading-[1.05]">
                    Automate your WhatsApp Business. <span class="text-primary relative inline-block">
                        Reply instantly.
                        <svg class="absolute -bottom-2 left-0 w-full" fill="none" height="8" viewbox="0 0 400 8" xmlns="http://www.w3.org/2000/svg">
<path d="M2 5.5C50 2 150 2 398 5.5" stroke="#25d366" stroke-linecap="round" stroke-width="4"></path>
</svg>
</span>
</h1>
<p class="text-xl text-on-surface-variant max-w-xl leading-relaxed">
                    Send catalogs, build visual bots, and never miss a customer again. Scale your conversations with futuristic AI that sounds remarkably human.
                </p>
<div class="flex flex-col sm:flex-row gap-5">
<button class="emerald-gradient text-on-primary px-10 py-5 rounded-2xl text-lg font-bold shadow-2xl shadow-primary/30 hover:translate-y-[-2px] transition-all active:scale-95">Start Free Trial</button>
<button class="bg-white border border-outline-variant/30 text-on-surface px-10 py-5 rounded-2xl text-lg font-bold hover:bg-surface-container-low transition-all shadow-sm">Book a Demo</button>
</div>
<div class="flex items-center gap-6 pt-4">
<div class="flex -space-x-3">
<div class="w-12 h-12 rounded-full border-4 border-background bg-surface-container-high shadow-lg overflow-hidden" data-alt="user portrait 1"></div>
<div class="w-12 h-12 rounded-full border-4 border-background bg-surface-container-high shadow-lg overflow-hidden" data-alt="user portrait 2"></div>
<div class="w-12 h-12 rounded-full border-4 border-background bg-surface-container-high shadow-lg overflow-hidden" data-alt="user portrait 3"></div>
</div>
<div class="text-sm">
<p class="font-bold text-on-surface">Join 2,000+ businesses</p>
<p class="text-on-surface-variant">Growing 40% faster with Wali</p>
</div>
</div>
</div>
<!-- Right Visual (Futuristic Mobile/Interface) -->
<div class="lg:col-span-5 relative">
<div class="relative z-10 floating">
<!-- Glassmorphism Phone Frame -->
<div class="mx-auto w-[320px] aspect-[9/19] bg-neutral-900 rounded-[3rem] p-3 shadow-[0_50px_100px_-20px_rgba(0,109,47,0.3)] border-[8px] border-neutral-800 relative overflow-hidden">
<!-- Dynamic Screen Content -->
<div class="h-full w-full bg-white rounded-[2.2rem] overflow-hidden flex flex-col">
<!-- App Bar -->
<div class="bg-[#075e54] p-5 pt-10 flex items-center gap-3">
<div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
<span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">bolt</span>
</div>
<div class="flex-1">
<p class="text-white font-bold text-xs">Wali AI Agent</p>
<div class="flex items-center gap-1">
<span class="w-1.5 h-1.5 bg-primary-fixed rounded-full animate-pulse"></span>
<p class="text-white/70 text-[10px]">Processing...</p>
</div>
</div>
</div>
<!-- Messages -->
<div class="flex-1 p-4 space-y-4 bg-[#e5ddd5]/50 overflow-hidden">
<div class="flex justify-end">
<div class="bg-[#dcf8c6] px-3 py-2 rounded-xl rounded-tr-none shadow-sm text-[11px] max-w-[85%]">
                                        Can I see the new arrivals for the summer collection?
                                    </div>
</div>
<div class="flex justify-start">
<div class="bg-white px-3 py-2 rounded-xl rounded-tl-none shadow-sm text-[11px] max-w-[85%] space-y-2">
<p>Of course! Here are our top 3 picks for you today:</p>
<div class="grid grid-cols-2 gap-2">
<div class="aspect-square bg-surface-container-high rounded-lg overflow-hidden" data-alt="summer product preview"></div>
<div class="aspect-square bg-surface-container-high rounded-lg overflow-hidden" data-alt="summer product preview 2"></div>
</div>
</div>
</div>
<div class="flex justify-start">
<div class="bg-primary/5 border border-primary/20 px-3 py-2 rounded-xl text-[10px] text-primary font-bold italic">
                                        AI generated a 15% discount code for this user...
                                    </div>
</div>
</div>
</div>
</div>
<!-- Floating Glass Elements -->
<div class="absolute -top-10 -right-10 glass-card p-6 rounded-2xl shadow-2xl z-20 max-w-[180px] hidden md:block">
<div class="flex items-center gap-2 mb-2">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">insights</span>
<span class="font-bold text-xs">Real-time ROI</span>
</div>
<p class="text-2xl font-extrabold text-on-surface">+124%</p>
<p class="text-[10px] text-on-surface-variant">Conversation volume increase this month</p>
</div>
<div class="absolute bottom-10 -left-16 glass-card p-5 rounded-2xl shadow-2xl z-20 hidden md:block border-primary/20">
<div class="flex items-center gap-3">
<div class="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-sm">auto_mode</span>
</div>
<div>
<p class="text-[10px] font-bold">Auto-Pilot Active</p>
<p class="text-[9px] text-on-surface-variant">98% customer satisfaction</p>
</div>
</div>
</div>
</div>
<!-- Glowing Accents -->
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full -z-10 opacity-60"></div>
</div>
</div>
</div>
</section>
<!-- Feature Icons -->
<section class="py-24 bg-surface-container-low" id="features">
<div class="max-w-7xl mx-auto px-6">
<div class="text-center mb-16">
<h2 class="text-3xl font-headline font-bold text-on-surface mb-4">Everything you need to scale</h2>
<p class="text-on-surface-variant max-w-2xl mx-auto">Powerful features designed to turn WhatsApp into your most profitable sales channel.</p>
</div>
<div class="grid grid-cols-2 md:grid-cols-5 gap-8">
<div class="flex flex-col items-center text-center p-6 bg-surface-container-lowest rounded-xl hover:shadow-xl hover:shadow-primary/5 transition-all group">
<div class="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-3xl">auto_awesome</span>
</div>
<h3 class="font-bold text-sm">AI Auto-replies</h3>
</div>
<div class="flex flex-col items-center text-center p-6 bg-surface-container-lowest rounded-xl hover:shadow-xl hover:shadow-primary/5 transition-all group">
<div class="w-14 h-14 rounded-full bg-secondary-fixed/30 flex items-center justify-center text-secondary mb-4 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-3xl">account_tree</span>
</div>
<h3 class="font-bold text-sm">Visual Builder</h3>
</div>
<div class="flex flex-col items-center text-center p-6 bg-surface-container-lowest rounded-xl hover:shadow-xl hover:shadow-primary/5 transition-all group">
<div class="w-14 h-14 rounded-full bg-tertiary-fixed/40 flex items-center justify-center text-tertiary mb-4 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-3xl">grid_view</span>
</div>
<h3 class="font-bold text-sm">Catalogs</h3>
</div>
<div class="flex flex-col items-center text-center p-6 bg-surface-container-lowest rounded-xl hover:shadow-xl hover:shadow-primary/5 transition-all group">
<div class="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-3xl">groups</span>
</div>
<h3 class="font-bold text-sm">Segmentation</h3>
</div>
<div class="flex flex-col items-center text-center p-6 bg-surface-container-lowest rounded-xl hover:shadow-xl hover:shadow-primary/5 transition-all group">
<div class="w-14 h-14 rounded-full bg-secondary-fixed/30 flex items-center justify-center text-secondary mb-4 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-3xl">support_agent</span>
</div>
<h3 class="font-bold text-sm">Multi-agent</h3>
</div>
</div>
</div>
</section>
<!-- How it Works -->
<section class="py-24 overflow-hidden">
<div class="max-w-7xl mx-auto px-6">
<div class="grid lg:grid-cols-2 gap-16 items-center">
<div class="order-2 lg:order-1 relative">
<div class="absolute -top-12 -left-12 w-64 h-64 bg-secondary-fixed/20 blur-[100px] rounded-full"></div>
<div class="relative grid grid-cols-2 gap-4">
<div class="space-y-4 pt-12">
<div class="bg-surface-container-lowest p-6 rounded-xl shadow-lg border border-outline-variant/10">
<div class="w-10 h-10 bg-primary-container/20 rounded-lg flex items-center justify-center text-primary mb-4">
<span class="material-symbols-outlined">api</span>
</div>
<p class="font-bold mb-1">API Verified</p>
<p class="text-xs text-on-surface-variant">Official Meta integration for stability.</p>
</div>
<div class="bg-surface-container-lowest p-6 rounded-xl shadow-lg border border-outline-variant/10">
<div class="w-10 h-10 bg-secondary-container/20 rounded-lg flex items-center justify-center text-secondary mb-4">
<span class="material-symbols-outlined">rocket_launch</span>
</div>
<p class="font-bold mb-1">Instant Scale</p>
<p class="text-xs text-on-surface-variant">Handle 1,000+ chats simultaneously.</p>
</div>
</div>
<div class="space-y-4">
<div class="bg-surface-container-lowest p-6 rounded-xl shadow-lg border border-outline-variant/10">
<div class="w-10 h-10 bg-tertiary-container/20 rounded-lg flex items-center justify-center text-tertiary mb-4">
<span class="material-symbols-outlined">schema</span>
</div>
<p class="font-bold mb-1">Smart Routing</p>
<p class="text-xs text-on-surface-variant">Assign chats to the right human agent.</p>
</div>
<div class="bg-surface-container-lowest p-6 rounded-xl shadow-lg border border-outline-variant/10">
<div class="w-10 h-10 bg-primary-container/20 rounded-lg flex items-center justify-center text-primary mb-4">
<span class="material-symbols-outlined">monitoring</span>
</div>
<p class="font-bold mb-1">Live Analytics</p>
<p class="text-xs text-on-surface-variant">Track response times and conversion.</p>
</div>
</div>
</div>
</div>
<div class="order-1 lg:order-2 space-y-10">
<h2 class="text-4xl font-headline font-bold">Go live in minutes, not days.</h2>
<div class="space-y-8">
<div class="flex gap-6">
<div class="flex-shrink-0 w-12 h-12 rounded-full emerald-gradient text-white flex items-center justify-center font-bold text-xl">1</div>
<div>
<h3 class="text-xl font-bold mb-2">Connect Meta API</h3>
<p class="text-on-surface-variant">Authorize your WhatsApp Business account via our secure official integration in one click.</p>
</div>
</div>
<div class="flex gap-6">
<div class="flex-shrink-0 w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-xl">2</div>
<div>
<h3 class="text-xl font-bold mb-2">Build with Visual Builder</h3>
<p class="text-on-surface-variant">Drag and drop responses, buttons, and catalogs to create your perfect automated flow.</p>
</div>
</div>
<div class="flex gap-6">
<div class="flex-shrink-0 w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-xl">3</div>
<div>
<h3 class="text-xl font-bold mb-2">Automate &amp; Grow</h3>
<p class="text-on-surface-variant">Turn on the AI and watch your engagement soar while you focus on high-value business tasks.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Use Cases -->
<section class="py-24 bg-surface" id="use-cases">
<div class="max-w-7xl mx-auto px-6">
<div class="text-center mb-16">
<h2 class="text-3xl font-headline font-bold mb-4">Built for every industry</h2>
<p class="text-on-surface-variant max-w-2xl mx-auto">Tailored automation solutions for your specific business needs.</p>
</div>
<div class="grid md:grid-cols-3 gap-8">
<div class="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10 group hover:translate-y-[-8px] transition-transform">
<div class="h-48 mb-6 rounded-lg overflow-hidden relative" data-alt="chic minimalist clothing store interior">
<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
<span class="text-white font-bold">E-commerce &amp; Stores</span>
</div>
</div>
<p class="text-on-surface-variant text-sm leading-relaxed mb-6">Recover abandoned carts, send shipping updates, and sell directly through WhatsApp catalogs.</p>
<a class="text-primary font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <span class="material-symbols-outlined text-sm">arrow_forward</span></a>
</div>
<div class="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10 group hover:translate-y-[-8px] transition-transform">
<div class="h-48 mb-6 rounded-lg overflow-hidden relative" data-alt="clean modern dental clinic reception area">
<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
<span class="text-white font-bold">Clinics &amp; Services</span>
</div>
</div>
<p class="text-on-surface-variant text-sm leading-relaxed mb-6">Automate appointment bookings, send reminders, and answer common health or service FAQs instantly.</p>
<a class="text-primary font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <span class="material-symbols-outlined text-sm">arrow_forward</span></a>
</div>
<div class="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10 group hover:translate-y-[-8px] transition-transform">
<div class="h-48 mb-6 rounded-lg overflow-hidden relative" data-alt="vibrant bistro restaurant dining area">
<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
<span class="text-white font-bold">Restaurants &amp; Bookings</span>
</div>
</div>
<p class="text-on-surface-variant text-sm leading-relaxed mb-6">Handle table reservations, share digital menus, and process takeout orders without a single phone call.</p>
<a class="text-primary font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <span class="material-symbols-outlined text-sm">arrow_forward</span></a>
</div>
</div>
</div>
</section>
<!-- Pricing -->
<section class="py-24 bg-surface-container-low" id="pricing">
<div class="max-w-7xl mx-auto px-6">
<div class="text-center mb-16">
<h2 class="text-3xl font-headline font-bold mb-4">Simple, transparent pricing</h2>
<p class="text-on-surface-variant">Choose the plan that fits your growth stage. No hidden fees.</p>
</div>
<div class="grid md:grid-cols-3 gap-8">
<!-- Starter -->
<div class="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 flex flex-col">
<div class="mb-8">
<h3 class="text-xl font-bold mb-2">Starter</h3>
<div class="flex items-baseline gap-1">
<span class="text-4xl font-extrabold text-on-surface">$29</span>
<span class="text-on-surface-variant">/mo</span>
</div>
<p class="mt-4 text-sm text-on-surface-variant">Perfect for small shops starting with automation.</p>
</div>
<ul class="space-y-4 mb-10 flex-1">
<li class="flex items-center gap-3 text-sm">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                                500 conversations/mo
                            </li>
<li class="flex items-center gap-3 text-sm">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                                Visual Bot Builder
                            </li>
<li class="flex items-center gap-3 text-sm">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                                2 Human Agents
                            </li>
<li class="flex items-center gap-3 text-sm opacity-40">
<span class="material-symbols-outlined">cancel</span>
                                Advanced AI Training
                            </li>
</ul>
<button class="w-full py-3 rounded-lg font-bold border border-primary text-primary hover:bg-primary/5 transition-colors">Choose Starter</button>
</div>
<!-- Growth -->
<div class="bg-surface-container-lowest p-8 rounded-xl border-2 border-primary relative shadow-xl shadow-primary/5 flex flex-col transform md:scale-105 z-10">
<div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 emerald-gradient text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Most Popular</div>
<div class="mb-8">
<h3 class="text-xl font-bold mb-2">Growth</h3>
<div class="flex items-baseline gap-1">
<span class="text-4xl font-extrabold text-on-surface">$79</span>
<span class="text-on-surface-variant">/mo</span>
</div>
<p class="mt-4 text-sm text-on-surface-variant">For businesses scaling their sales operations.</p>
</div>
<ul class="space-y-4 mb-10 flex-1">
<li class="flex items-center gap-3 text-sm">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                                2,500 conversations/mo
                            </li>
<li class="flex items-center gap-3 text-sm">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                                Full Catalog Integration
                            </li>
<li class="flex items-center gap-3 text-sm">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                                10 Human Agents
                            </li>
<li class="flex items-center gap-3 text-sm">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                                Custom AI Training
                            </li>
</ul>
<button class="w-full py-4 rounded-lg font-bold emerald-gradient text-white shadow-lg shadow-primary/20 hover:scale-95 transition-transform">Choose Growth</button>
</div>
<!-- Pro -->
<div class="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 flex flex-col">
<div class="mb-8">
<h3 class="text-xl font-bold mb-2">Pro</h3>
<div class="flex items-baseline gap-1">
<span class="text-4xl font-extrabold text-on-surface">$149</span>
<span class="text-on-surface-variant">/mo</span>
</div>
<p class="mt-4 text-sm text-on-surface-variant">Enterprise features for high-volume support teams.</p>
</div>
<ul class="space-y-4 mb-10 flex-1">
<li class="flex items-center gap-3 text-sm">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                                Unlimited conversations
                            </li>
<li class="flex items-center gap-3 text-sm">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                                Advanced CRM Sync
                            </li>
<li class="flex items-center gap-3 text-sm">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                                Unlimited Human Agents
                            </li>
<li class="flex items-center gap-3 text-sm">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                                Dedicated Account Manager
                            </li>
</ul>
<button class="w-full py-3 rounded-lg font-bold border border-primary text-primary hover:bg-primary/5 transition-colors">Choose Pro</button>
</div>
</div>
</div>
</section>
<!-- FAQ -->
<section class="py-24">
<div class="max-w-3xl mx-auto px-6">
<h2 class="text-3xl font-headline font-bold text-center mb-12">Frequently Asked Questions</h2>
<div class="space-y-4">
<details class="group bg-surface-container-low rounded-xl" open="">
<summary class="list-none p-6 flex items-center justify-between cursor-pointer font-bold">
                            Do I need a separate phone number for Wali?
                            <span class="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div class="p-6 pt-0 text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/10">
                            Yes, we recommend using a clean phone number that isn't currently associated with a personal WhatsApp account. This ensures a smooth integration with the official Meta Cloud API.
                        </div>
</details>
<details class="group bg-surface-container-low rounded-xl">
<summary class="list-none p-6 flex items-center justify-between cursor-pointer font-bold">
                            How does the AI setup work?
                            <span class="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div class="p-6 pt-0 text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/10">
                            Our AI setup is visual and no-code. You simply feed it your business documentation or common FAQs, and our engine trains a custom LLM to handle your customer queries naturally.
                        </div>
</details>
<details class="group bg-surface-container-low rounded-xl">
<summary class="list-none p-6 flex items-center justify-between cursor-pointer font-bold">
                            Is Wali an official Meta Partner?
                            <span class="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div class="p-6 pt-0 text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/10">
                            Yes, Wali utilizes the official Meta WhatsApp Business Cloud API. Your account is safe, secure, and compliant with all of Meta's terms of service.
                        </div>
</details>
<details class="group bg-surface-container-low rounded-xl">
<summary class="list-none p-6 flex items-center justify-between cursor-pointer font-bold">
                            Can I transition from bot to human agent?
                            <span class="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div class="p-6 pt-0 text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/10">
                            Absolutely. You can set rules for "Human Handoff" whenever the bot can't answer a question or when a customer specifically requests to speak with a person.
                        </div>
</details>
</div>
</div>
</section>
<!-- Final CTA -->
<section class="py-24 px-6">
<div class="max-w-5xl mx-auto emerald-gradient rounded-[2rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/30">
<div class="absolute top-0 right-0 p-8 opacity-10">
<span class="material-symbols-outlined text-[200px]">chat</span>
</div>
<div class="relative z-10 space-y-8">
<h2 class="text-4xl lg:text-5xl font-headline font-bold leading-tight">Ready to automate your WhatsApp?</h2>
<p class="text-xl text-white/80 max-w-2xl mx-auto">Start your 14-day free trial today. No credit card required. Set up in under 5 minutes.</p>
<div class="flex flex-col sm:flex-row gap-4 justify-center">
<button class="bg-white text-primary px-8 py-4 rounded-xl text-lg font-bold shadow-xl hover:scale-95 transition-transform">Start Free Trial Now</button>
<button class="bg-primary-container/20 text-white border border-white/20 backdrop-blur-md px-8 py-4 rounded-xl text-lg font-bold hover:bg-primary-container/30 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full rounded-t-[1.5rem] bg-[#f6f3f2] dark:bg-neutral-950">
<div class="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 py-16 max-w-7xl mx-auto">
<div class="col-span-2 md:col-span-1 space-y-6">
<a class="text-xl font-bold text-[#1c1b1b] dark:text-[#fcf9f8] flex items-center gap-2" href="#">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">chat_bubble</span>
<span>Wali</span>
</a>
<p class="text-sm text-on-surface/60 leading-relaxed">
                    The world's leading WhatsApp automation platform for high-growth modern brands.
                </p>
<div class="flex gap-4">
<a class="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:scale-110 transition-transform" href="#"><span class="material-symbols-outlined">public</span></a>
<a class="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:scale-110 transition-transform" href="#"><span class="material-symbols-outlined">alternate_email</span></a>
</div>
</div>
<div class="space-y-4">
<h4 class="font-bold text-[#1c1b1b] dark:text-[#fcf9f8]">Company</h4>
<ul class="space-y-2 text-sm text-on-surface/60">
<li><a class="hover:text-[#006d2f] transition-all" href="#">About Us</a></li>
<li><a class="hover:text-[#006d2f] transition-all" href="#">Careers</a></li>
<li><a class="hover:text-[#006d2f] transition-all" href="#">Blog</a></li>
</ul>
</div>
<div class="space-y-4">
<h4 class="font-bold text-[#1c1b1b] dark:text-[#fcf9f8]">Product</h4>
<ul class="space-y-2 text-sm text-on-surface/60">
<li><a class="hover:text-[#006d2f] transition-all" href="#">Features</a></li>
<li><a class="hover:text-[#006d2f] transition-all" href="#">Use Cases</a></li>
<li><a class="hover:text-[#006d2f] transition-all" href="#">Pricing</a></li>
<li><a class="hover:text-[#006d2f] transition-all" href="#">Resources</a></li>
</ul>
</div>
<div class="space-y-4">
<h4 class="font-bold text-[#1c1b1b] dark:text-[#fcf9f8]">Legal</h4>
<ul class="space-y-2 text-sm text-on-surface/60">
<li><a class="hover:text-[#006d2f] transition-all" href="#">Privacy Policy</a></li>
<li><a class="hover:text-[#006d2f] transition-all" href="#">Terms of Service</a></li>
<li><a class="hover:text-[#006d2f] transition-all" href="#">Security</a></li>
</ul>
</div>
</div>
<div class="max-w-7xl mx-auto px-8 py-8 border-t border-outline-variant/10 text-center md:text-left">
<p class="font-['Inter'] text-sm text-on-surface/60">© 2024 Wali Automation. All rights reserved.</p>
</div>
</footer>
</body></html>