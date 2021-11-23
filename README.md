# FEM4Final

Учасники проекту:

**1. Олександр** <br>
**2. Ігор** <br>
**3. Ольга** <br>
**4. Ксенія** <br>
**5. Антон** <br>

- Проект створений із використанням фреймворка React і Redux.
- Стилі компонентів реалізовані за допомогою styled components.
- У якості сервера використаний загальнодоступний тестовий сервер Mongo DB.
- Для запитів на сервер використана бібліотека axios.
- Middleware реалізовано із використанням бібліотеки thunk.

1. Олександр

_1. Організація проекту:_

- Створені необхідні акаунти для проекту (репозиторій, поштова скринька, база даних).
- За налаштуваннями репозиторія мердж доступний після підтвердження двома учасниками.
- Встановлення та налаштування інструментів для контролю якості коду. 

  
**2. Ігор**

_1. Структура проекту_

 Розроблена початкова структура проекту.
 
_2. Routing_  

Реалізовано базовий перелік захищених та відкритих роутів усіх сторінок.

_3. Спадне меню компоненту Header_

 У  базу даних доданий список категорій для компонента Header (за результатом вивчення документації по бекенду). Спадне меню реалізовано з використанням хуку useState. 

_4. Layout_  

Реалізовано компонент Layout для рендера на всіх сторінках Header та Footer.

_5. Collections_  

Налаштовані динамічні роути для переходу за посиланнями блоку з використанням useParams.

_6. Фільтри_

Реалізовано компонент, що здійснює фільтрацію товарів за обраними параметрами. Підключено Redux. Реалізовано actions creators, dispatching function, reducers. Підготовлений стор для блоку фільтрів товарів:
- контроль стану спадних блоків сторінки фільтрів;
- збереження у стор даних про вибрані фільтри;
- зміна даних у сторі, якщо обрані інші параметри фільтрів.
 
_7. Querystring_

Для формування query-string для запиту на сервер використана бібліотека npm  query-string.

**3. Оля**
  
  _1. Header_ 
  
  Реалізовано адаптивний Header сайту, що включає в себе поле пошуку по товарах, іконки для логіну користувача, список бажань, корзину та логотип, який є клікабельним і здійснює редірект на головну сторінку. 
  
  _2. Поле пошуку_ 
  
  Компонент виконує пошук по товарах у базі даних та відображає у випадному списку усі знайдені за збігом товари. Кожна іконка є клікабельним посиланням та здійснює перехід на детальну інформацію товару. 
  
  _3. Форми_ 
  
  Зверстано адаптивні форми 
  
  _4. Функціонал логіну:_ 
  
  - валідація введених даних; 
  
  - авторизація на сервері; 
  
  - збереження інформації користувача; 
  
  - функціонал remember me; 
  
  _5. Функціонал реєстрації користувача:_ 
  
  - валідація введених даних; 
  
  - запит на створення користувача на сервері; 
  
  - обробка серверних помилок; 
  
  - збереження інформації користувача; 
  

  _6. Додані зображення та медіа-запити до промо-слайдера._
  
  _7. Верстка секцій Selected collections та Zarina - value is you._
 
  _8. До секцій Footer та Explore categories додані медіа-запити._
    
  **4. Ксенія** 
  
  _1. Карточка товару_ 
  
  Реалізовано компонент ProductItem, що приймає у себе список властивостей зі сервера. Рендерить назву товару, ціну, зображення, а також кнопку Favorites, що за натиском дозволяє додати до Wishlist або видалити його. ProductItem клікабельний компонент, що перенаправляє на сторінку детального опису. 
  
  _2. Детальна карточка товару_ 
  
  Реалізовано компонент ProductDetails, що рендерить детальний опис конкретного товару, використовуючи для запиту вказаний у роуті itemNo. Включає в себе необхідні для детального опису поля, зображення, кнопку Favorites, кнопку додавання товару в кошик.  
  
  _3. Кнопка Favorites_ 
  
  Компонент  дозволяє додати товар до улюблених та видалити його. Додається у store за id товару. Якщо компонент доданий до улюблених, маркується рожевим, якщо ні - чорним. Реалізовано actions creators, dispatching function, reducers.  
     
  _4. Wishlist_ 
  
  Рендерить список товарів, відзначених улюбленими. Включає в себе назву товару, артикул, зображення та ціну, кнопку видалення з улюблених та кнопку додавання в кошик. Зображення є клікабельним та відкриває користувачу детальну інформацію про товар.
  
  **5. Антон**
   
 _1. Компонент Pagination, LoadMore та фільтр Sort by _ 
     
   Користувач може обирати пагінацію по сторінкам чи додовати більше товарів,
   також реалызована можливість ділитись URL з будь-якою querystring 
   поєднав компонент з фільтрами Ігоря зі своїми компонентами пагінацією та сортуванням   
  
    
 _2. Усі компоненти SliderHomepage, SliderProducts, SliderProductDetails _
    
   Реалізовані слайдери за допомогою Slick з отриманням фото з бази данних, та логікою:
    - Recently Viewed: логіка слайдеру : як в справжньому магазині, поки користувач не подивився три або більше товарів,
    йому показуємо товари з різних категорій, а потім ті товари що він вже дивився за допомогою localstorage.
    - Complete the set: показуємо товари якї найкраще поєднуються, з цієї ж колекції але різних категорій
    - Featured: товари де кожен з різної категорії, та чергується один за одним, щоб користувач бачив весь ассортимент  
    - слайдер з зумом основного фото на сторінці товару
    - зміна фото при наведенні на товар в сладерах Featured, Recently Viewed, Complete the Set
   
 _3. Парсер товарів з сайту zarina.ua _ 
     
   Автоматичний масовий парсер товарів по категоріям з додаванням фото та товарів в базу данних.
   Реалізован за допомогою Cherio, Needle та RegExp
    
 _4. Функції CRUD AdminFunctions _ 
    
   Додати видалити змінити товари категорії, статичні сторінки та інше
     
      
 _5. Компонент Categories homepage _ 
     
   Реалізован за допомоги react-xmasonry, дозволяє додавати категорії та автоматично корегує зовнішній
   вигляд компоненту на сайті
     
 _6. Компонент Footer _ 
    
   Статичні сторінки, через Mongo db та підписка на email розсилку