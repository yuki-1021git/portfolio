// ===== HEADER SCROLL EFFECT =====
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const mainview = document.getElementById('mainview');
    
    if (!header || !mainview) return;
    
    // mainviewの高さを取得
    const mainviewHeight = mainview.offsetHeight;
    
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // mainviewを過ぎたら背景を付ける
        if (scrollTop > mainviewHeight - 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    // スクロールイベントリスナーを追加
    window.addEventListener('scroll', handleScroll);
    
    // 初期状態をチェック
    handleScroll();
});

// ===== SMOOTH SCROLL =====
document.addEventListener('DOMContentLoaded', function() {
    // すべてのアンカーリンクにスムーススクロールを適用
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // 外部リンクや空のhrefは除外
            if (href === '#' || href.startsWith('http')) return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                // ヘッダーの高さを考慮したオフセット
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ===== WORKS FILTER FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const workItems = document.querySelectorAll('.work-item');
    
    if (filterBtns.length === 0 || workItems.length === 0) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // アクティブなボタンのスタイルを更新
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            // 作品アイテムの表示/非表示を切り替え
            workItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
document.addEventListener('DOMContentLoaded', function() {
    // アニメーション対象の要素を定義
    const animatedElements = document.querySelectorAll('.news-item, .service-item, .work-item, .motivation-item, .skill-category');
    
    if (animatedElements.length === 0) return;
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // 初期状態を設定してオブザーバーに登録
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===== HAMBURGER MENU =====
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    
    if (!hamburger || !mobileMenu || !mobileMenuOverlay || !mobileMenuClose) return;
    
    // ハンバーガーメニューの開閉
    function toggleMenu() {
        const isOpen = mobileMenu.classList.contains('active');
        
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }
    
    // メニューを開く
    function openMenu() {
        hamburger.classList.add('active');
        mobileMenu.classList.add('active');
        mobileMenuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // スクロール無効化
    }
    
    // メニューを閉じる
    function closeMenu() {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = ''; // スクロール有効化
    }
    
    // ハンバーガーボタンクリック
    hamburger.addEventListener('click', toggleMenu);
    
    // ×ボタンクリック
    mobileMenuClose.addEventListener('click', closeMenu);
    
    // オーバーレイクリックでメニューを閉じる
    mobileMenuOverlay.addEventListener('click', closeMenu);
    
    // メニュー内の<a>以外の部分をクリックでメニューを閉じる
    mobileMenu.addEventListener('click', function(e) {
        // クリックされた要素が<a>タグまたは×ボタンでない場合のみ閉じる
        if (e.target.tagName !== 'A' && !e.target.closest('.mobile-menu-close')) {
            closeMenu();
        }
    });
    
    // メニューリンククリックでメニューを閉じる
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    // ESCキーでメニューを閉じる
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // ウィンドウリサイズ時にメニューを閉じる（デスクトップに戻った時）
    window.addEventListener('resize', function() {
        if (window.innerWidth > 640 && mobileMenu.classList.contains('active')) {
            closeMenu();
        }
    });
});
