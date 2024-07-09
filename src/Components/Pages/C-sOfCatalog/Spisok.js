
import Kreslo1 from './imagesFor/Kreslo1.jpg'
import Kreslo2 from './imagesFor/Kreslo2.jpg'
import Divan1 from './imagesFor/Divan1.jpg'
import Divan2 from './imagesFor/Divan2.jpg'
import Krovat1 from './imagesFor/Krovat1.jpg'
import Krovat2 from './imagesFor/Krovat2.jpg'
import Shkaf1 from './imagesFor/Shkaf1.jpg'
import Shkaf2 from './imagesFor/Shkaf2.jpg'
import Postel1 from './imagesFor/Postel1.jpg'
import Postel2 from './imagesFor/Postel2.jpg'
import Otziv from './Otziv'
import uuid from 'react-uuid';


let arr=[
    {id:uuid(),
     src:Kreslo1,
     name:'Кресло Модель№1',
     opis:`Стильное кресло для комфортного отдыха. Мягкая изогнутая спинка, удобные подлокотники, просторное сиденье и приятная на ощупь дополнительная подушка под спину – это кресло создано дарить уют. Англичане говорят: «Мой дом – моя крепость». И вы можете быть уверены: кресло «Оксфорд» такое же крепкое и надежное, как стены одноименного университета.`,
     otziv:Otziv,
     price:'5000',
     totalPrice:'5000',
     checked:false,
     position:1
    },  
    {
      id:uuid(),
      src:Kreslo2,
      name:'Кресло Модель№2',
      opis:`Стильное кресло для комфортного отдыха. Мягкая изогнутая спинка, удобные подлокотники, просторное сиденье и приятная на ощупь дополнительная подушка под спину – это кресло создано дарить уют. Англичане говорят: «Мой дом – моя крепость». И вы можете быть уверены: кресло «Оксфорд» такое же крепкое и надежное, как стены одноименного университета.`,
      otziv:Otziv,
      price:'7000',
      totalPrice:'7000',
      checked:false,
      position:1
     }, 
     {id:uuid(),
      src:Divan1,
       name:'Диван Модель№1',
       opis:`Лаконичные линии и простые формы, безупречный стиль и индивидуальность – все это диван «Динс Мини». Сдержанный скандинавский дизайн украсит любую современную обстановку. Элегантность, комфорт и функциональность, собранные воедино – «Динс Мини» просто создан для размеренного отдыха в кругу семьи или компании друзей!`,
       otziv:Otziv,
       price:'8000',
       totalPrice:'8000',
       checked:false,
       position:1
      }, 
      {id:uuid(),
        src:Divan2,
        name:'Диван Модель№2',
        opis:`Лаконичные линии и простые формы, безупречный стиль и индивидуальность – все это диван «Динс Мини». Сдержанный скандинавский дизайн украсит любую современную обстановку. Элегантность, комфорт и функциональность, собранные воедино – «Динс Мини» просто создан для размеренного отдыха в кругу семьи или компании друзей!`,
        otziv:Otziv,
        price:'9000',
        totalPrice:'9000',
        checked:false,
        position:1
       }, 
       {id:uuid(),
        src:Krovat1,
         name:'Кровать Модель№1',
         opis:`Обратите внимание: на опорах, изготовленных из сращенного массива, допускается сочетание разных оттенков древесины. Сращенный массив более долговечен и устойчив к температурным перепадам и влажности, чем цельный. Мы используем технологию сращивания древесины, чтобы сократить отходы производства и сделать дизайн доступным.`,
         otziv:Otziv,
         price:'8000',
         totalPrice:'8000',
         checked:false,
         position:1
        }, 
        {id:uuid(),
          src:Krovat2,
          name:'Кровать Модель№2',
          opis:`Обратите внимание: на опорах, изготовленных из сращенного массива, допускается сочетание разных оттенков древесины. Сращенный массив более долговечен и устойчив к температурным перепадам и влажности, чем цельный. Мы используем технологию сращивания древесины, чтобы сократить отходы производства и сделать дизайн доступным.`,
          otziv:Otziv,
          price:'6000',
          totalPrice:'6000',
          checked:false,
          position:1
         }, 
         {id:uuid(),
          src:Postel1,
           name:'Постельное бельё Модель№1',
           opis:`Коллекция постельного белья Scandi добавит спальне ярких акцентов и подарит отличное настроение. Благодаря полностью натуральному составу постельное белье линейки Scandi прекрасно дышит, нежно окутывает и дарит легкое засыпание вечером и приятное пробуждение утром.`,
           otziv:Otziv,
           price:'5000',
           totalPrice:'5000',
           checked:false,
           position:1
          }, 
          {id:uuid(),
            src:Postel2,
            name:'Постельное бельё Модель№2',
            opis:`Коллекция постельного белья Scandi добавит спальне ярких акцентов и подарит отличное настроение. Благодаря полностью натуральному составу постельное белье линейки Scandi прекрасно дышит, нежно окутывает и дарит легкое засыпание вечером и приятное пробуждение утром.`,
            otziv:Otziv,
            price:'4000',
            totalPrice:'4000',
            checked:false,
            position:1
           }, 
           {id:uuid(),
            src:Shkaf1,
             name:'Шкаф Модель№1',
             opis:`Можно установить дополнительно 4 полки ЛДСП (2 модуля МГ-011.00);
             Имеется полка и штанга для навешивания одежды;
             Двери рамочные (со вставкой ЛДСП 8 мм);
             Цвет: дуб бунратти;
             Отдельно стоящий шкаф необходимо крепить к стене во избежание опрокидывания.`,
             otziv:Otziv,
             price:'9000',
             totalPrice:'9000',
             checked:false,
             position:1
            }, 
            {id:uuid(),
              src:Shkaf2,
              name:'Шкаф Модель№2',
              opis:`Можно установить дополнительно 4 полки ЛДСП (2 модуля МГ-011.00);
              Имеется полка и штанга для навешивания одежды;
              Двери рамочные (со вставкой ЛДСП 8 мм);
              Цвет: дуб бунратти;
              Отдельно стоящий шкаф необходимо крепить к стене во избежание опрокидывания.`,
              otziv:Otziv,
              price:'8000',
              totalPrice:'8000',
              checked:false,
              position:1
             }
  ]
export {arr}
