document.addEventListener('DOMContentLoaded', function() {
    // Модальное окно входа
    const authButton = document.getElementById('authButton');
    const authModal = document.getElementById('authModal');
    const modalClose = document.querySelector('.modal__close');
    const feedbackBtn = document.getElementById('feedbackBtn');
    const feedbackModal = document.getElementById('feedbackModal');
    const goToAuth = document.getElementById('goToAuth');
    
    // Открытие модального окна входа
    authButton.addEventListener('click', function() {
        authModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
    
    // Открытие модального окна отзыва
    feedbackBtn.addEventListener('click', function() {
        feedbackModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
    
    // Переход из окна отзыва к окну входа
    goToAuth.addEventListener('click', function() {
        feedbackModal.style.display = 'none';
        authModal.style.display = 'flex';
    });
    
    // Закрытие модальных окон
    modalClose.addEventListener('click', function() {
        authModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    feedbackModal.querySelector('.modal__close').addEventListener('click', function() {
        feedbackModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Закрытие при клике вне окна
    window.addEventListener('click', function(event) {
        if (event.target === authModal) {
            authModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (event.target === feedbackModal) {
            feedbackModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Кнопка наверх
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
document.addEventListener('DOMContentLoaded', function() {
        const courseCards = document.querySelectorAll('.course-card');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        const dotsContainer = document.querySelector('.dots-container');
        let currentIndex = 0;
        
        // Создаем точки для навигации
        function createDots() {
            courseCards.forEach((_, index) => {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                if (index === currentIndex) dot.classList.add('active');
                dot.addEventListener('click', () => {
                    goToSlide(index);
                });
                dotsContainer.appendChild(dot);
            });
        }
        
        // Переход к конкретному слайду
        function goToSlide(index) {
            courseCards.forEach((card, i) => {
                card.classList.toggle('active', i === index);
            });
            
            const dots = document.querySelectorAll('.dot');
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            
            currentIndex = index;
        }
        
        // Следующий слайд
        function nextSlide() {
            currentIndex = (currentIndex + 1) % courseCards.length;
            goToSlide(currentIndex);
        }
        
        // Предыдущий слайд
        function prevSlide() {
            currentIndex = (currentIndex - 1 + courseCards.length) % courseCards.length;
            goToSlide(currentIndex);
        }
        
        // Инициализация
        createDots();
        goToSlide(0);
        
        // Навешиваем обработчики событий
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
        
        // Автопрокрутка (опционально)
        // setInterval(nextSlide, 5000);
    });
    
    // Создаем точки для навигации
    courseCards.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            updateCarousel(index);
        });
        dotsContainer.appendChild(dot);
    });
    
    // Обновление карусели
    function updateCarousel(newIndex) {
        // Ограничиваем индекс
        if (newIndex < 0) newIndex = courseCards.length - 1;
        if (newIndex >= courseCards.length) newIndex = 0;
        
        // Обновляем активную карточку
        courseCards.forEach((card, index) => {
            if (index === newIndex) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
        
        // Обновляем активную точку
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            if (index === newIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
        
        // Прокручиваем к активной карточке
        document.querySelector('.courses-container').scrollTo({
            left: newIndex * (350 + 30), // ширина карточки + отступ
            behavior: 'smooth'
        });
        
        currentIndex = newIndex;
    }
    
    // Кнопки навигации
    prevBtn.addEventListener('click', () => {
        updateCarousel(currentIndex - 1);
    });
    
    nextBtn.addEventListener('click', () => {
        updateCarousel(currentIndex + 1);
    });
    
    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Элементы карусели
    const courseCards = document.querySelectorAll('.course-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.dots-container');
    let currentIndex = 0;
    
    // Создаем точки для навигации
    function createDots() {
        courseCards.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (index === currentIndex) dot.classList.add('active');
            dot.addEventListener('click', () => {
                goToSlide(index);
            });
            dotsContainer.appendChild(dot);
        });
    }
    
    // Переход к конкретному слайду
    function goToSlide(index) {
        // Скрываем все карточки
        courseCards.forEach(card => {
            card.classList.remove('active');
        });
        
        // Показываем текущую карточку
        courseCards[index].classList.add('active');
        
        // Обновляем точки навигации
        const dots = document.querySelectorAll('.dot');
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        dots[index].classList.add('active');
        
        currentIndex = index;
    }
    
    // Следующий слайд
    function nextSlide() {
        currentIndex = (currentIndex + 1) % courseCards.length;
        goToSlide(currentIndex);
    }
    
    // Предыдущий слайд
    function prevSlide() {
        currentIndex = (currentIndex - 1 + courseCards.length) % courseCards.length;
        goToSlide(currentIndex);
    }
    
    // Инициализация карусели
    function initCarousel() {
        createDots();
        goToSlide(0);
        
        // Навешиваем обработчики событий
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
        
        // Автопрокрутка (раскомментируйте если нужно)
        // setInterval(nextSlide, 5000);
    }
    
    // Запускаем карусель
    initCarousel();
});
document.addEventListener('DOMContentLoaded', function() {
    // Находим контейнер для меню
    const header = document.querySelector('.header');
    
    if (header) {
        // Создаем элементы меню
        const nav = document.createElement('nav');
        nav.className = 'header__nav';
        
        const ul = document.createElement('ul');
        ul.className = 'header__list';
        
        // Данные для меню
        const menuData = [
            { link: '#promo', title: 'Главная' },
            { link: '#teachers', title: 'Преподаватели' },
            { link: '#courses', title: 'Курсы' },
            { link: '#reviews', title: 'Отзывы' },
            { link: '#contacts', title: 'Контакты' }
        ];

        // Создаем пункты меню
        menuData.forEach(item => {
            const li = document.createElement('li');
            li.className = 'header__item';
            
            const a = document.createElement('a');
            a.href = item.link;
            a.className = 'header__item--link';
            a.textContent = item.title;
            
            // Добавляем плавность при наведении
            a.style.transition = 'all 0.3s ease';
            a.addEventListener('mouseenter', () => {
                a.style.opacity = '0.7';
                a.style.transform = 'translateY(-2px)';
            });
            a.addEventListener('mouseleave', () => {
                a.style.opacity = '1';
                a.style.transform = 'translateY(0)';
            });
            
            li.appendChild(a);
            ul.appendChild(li);
        });

        nav.appendChild(ul);
        
        // Добавляем меню в header
        const loginButton = document.getElementById('authButton');
        if (loginButton) {
            header.insertBefore(nav, loginButton);
        } else {
            header.appendChild(nav);
        }
        
        // Адаптация для мобильных устройств
        const menuToggle = document.createElement('div');
        menuToggle.className = 'menu-toggle';
        menuToggle.innerHTML = '☰';
        menuToggle.style.display = 'none'; // По умолчанию скрываем
        menuToggle.style.cursor = 'pointer';
        menuToggle.style.fontSize = '24px';
        menuToggle.style.padding = '10px';
        
        header.insertBefore(menuToggle, nav);
        
        // Функция для проверки размера экрана и переключения меню
        function checkScreenSize() {
            if (window.innerWidth <= 768) {
                // Мобильный вид
                menuToggle.style.display = 'block';
                nav.style.display = 'none';
                
                // Плавное появление меню при клике
                menuToggle.addEventListener('click', function() {
                    if (nav.style.display === 'none' || !nav.style.display) {
                        nav.style.display = 'block';
                        nav.style.opacity = '0';
                        nav.style.transition = 'opacity 0.3s ease';
                        setTimeout(() => {
                            nav.style.opacity = '1';
                        }, 10);
                    } else {
                        nav.style.opacity = '0';
                        setTimeout(() => {
                            nav.style.display = 'none';
                        }, 300);
                    }
                });
            } else {
                // Десктопный вид
                menuToggle.style.display = 'none';
                nav.style.display = 'block';
                nav.style.opacity = '1';
            }
        }
        
        // Проверяем при загрузке и при изменении размера окна
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        
        console.log('Навигационное меню успешно создано с плавными анимациями!');
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы
    const authModal = document.getElementById('authModal');
    const startLearningBtn = document.getElementById('startLearningBtn');
    const freeLessonBtn = document.getElementById('freeLessonBtn');
    const closeBtn = document.querySelector('.modal__close');
    
    // Функция для открытия модального окна
    function openModal() {
        authModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Запрещаем прокрутку страницы
    }
    
    // Функция для закрытия модального окна
    function closeModal() {
        authModal.style.display = 'none';
        document.body.style.overflow = ''; // Возвращаем прокрутку
    }
    
    // Обработчики событий
    if (startLearningBtn) {
        startLearningBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openModal();
        });
    }
    
    if (freeLessonBtn) {
        freeLessonBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openModal();
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    // Закрытие при клике вне модального окна
    window.addEventListener('click', function(e) {
        if (e.target === authModal) {
            closeModal();
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('showRegisterBtn').addEventListener('click', function() {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registerForm').style.display = 'block';
    });

    document.getElementById('showLoginBtn').addEventListener('click', function() {
        document.getElementById('registerForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
    });
});