# Формула и метод расчета вкладов.

Все расчеты калькулятора находятся в файле [calculate.js](js/calculate.js).  

Капитализация вкладов у меня производилась раз в месяц, исходя из вашей формулы, но, к сожалению, я  не смог учесть  
количество дней в месяце на каждой итерации, поэтому просто приравнял каждый месяц к 30 дням(что не есть хорошо, ибо на крупных суммах
появляются неточности). Также я не смог учесть високосные года, поэтому любой год приравнивал к 365 дням, соответственно
уточнение даты оформления вклада по сути не нужен, но я все же сделал проверку на заполнение формы.  

Работоспособность калькулятора я сравнивал с аналогичным, который находится на [этом](https://www.banki.ru/ "banki.ru") портале
(плюс - минус результат выходит одинаковый).
        
# Сторонние плагины.


Для бегунков я использовал [noUISlider](https://refreshless.com/nouislider/). Оформление бегунков сделал на свой вкус, 
чтобы цвета соответствовали общему дизайну сайта.  

Для выбора даты я использовал [jQueryUI datepicker](https://jqueryui.com/datepicker/). Ему задал только русификацию, никаких дополнительных оформлений и анимаций.
        
# Адаптивность сайта.


Адаптивность сайта работает лишь до ширины экрана 760px, а дальше он начинает ломаться из-за бегунков. Я посчитал, что для достижения цели данного задания достаточно
декстопной версии.
        
# Использование JavaScript вместо PHP.


Я пока не имею опыта работы с PHP, поэтому мне проще было реализовать формулу расчета на JS.  
Если работа подразумевает знание PHP, то я готов его изучить.
        
