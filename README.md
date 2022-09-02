# Task-Ticket-Booking

Тестовое задание Frontend JS

Реализовать одностраничное приложение резервирования билетов в кинотеатр. 
Время начала сеансов 10.00, время последнего сеанса 20.00. Шаг каждые - 2 
часа. Таким образом в течение дня может быть 6 сеансов.
Интерфейс должен отображать доступные даты для бронирования, сеансы для 
выбранной даты, свободные и забронированные места. При выборе даты и сеанса 
меньше текущего времени и даты, должны отображаться архивные данные без 
возможности их изменения.
Для хранения дат использовать LocalStorage, и при перезагрузке страницы 
считывать данные из LocalStorage.
Глубина архива: одна неделя до текущей даты. Максимальный период 
бронирования: одна неделя от текущей даты.
Кроссбраузерная верстка(мин. IE 10).
Реализовать на JavaScript/JQuery/HTML5/CSS3