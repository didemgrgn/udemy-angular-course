import { setOptions } from "@storybook/addon-options";
import { moduleMetadata, storiesOf } from "@storybook/angular";
import { generateAsync } from "jszip";
import { StorybookModule } from "src/app/storybook/storybook.module";
import { withNotes } from "@storybook/addon-notes";
import { ButtonComponent }  from "src/app/storybook/button/button.component"; 

//İstediğimiz componentlerin story leri yansıtılıyor ve input , outpu nasıl göründüklerini görüntülemek amacıyla kullanılır

//Component te not eklemek için buttons-prefic.notes dan da not eklenebilir , özel olarak her componentin notunu oluşturup buraya require olarak ekleyerek
//*componentlere tek tek notes alanına eklenebilir
const buttonComponentNotes=require("src/app/storybook/button/buttons-prefix.notes.md")
.default;

setOptions({ //hiyerarşik bir yapıyı destekler options
    hierarchySeparator: /\//,
    hierarchyRootSeparator: /\|/
});

//Birden fazla stories ekleyerek hiyerarşik olarak  yansıtma yapılabilir.
//storiesOf => Core Library in story leri adı Button Component
storiesOf("Core Library|Button Component",module) // | hiyerarşik olarak ayırt ediyor, Core Library altında Button Component daha sorun stories olarak eklenebilir.
.addDecorator(withNotes)
.addDecorator(
    moduleMetadata({
        imports:[StorybookModule] 
    })
)
.addParameters({ component: ButtonComponent})
.add(
    "Stroked Buttons",
    () => ({
        component: ButtonComponent,
        props: {
            text: "Stroked" //value olarak ne göndereceksek componente input olarak göndermiş olacak
        }
    }),
    {
        //bu parametrede not ekleniyor
        notes:` 
        <h2>My notes emojis</h2>
        <em>It's not all that important to be honest, but.. </em>
        Emojis are gereat , I love emojis, in fact I like using them in my Component notes too!`
    }
)

.add(
    "Flat Buttons",
    () =>({
        component: ButtonComponent,
        props:{
            text:"Flat" //text te input olarak ne gönderildiyse o veriler yazmaktadır
        }
    }),
    {
        notes:`$(buttonComponentNotes)` //*Not gelecek alan :buttons-prefix.notes.md buradan çekiyor
    }
)
.add(
    "Only Text Button",
    () => ({
        component:ButtonComponent,
        props: {
            text:"Only Text Button"
        }
    }),
    {
        notes: `$(buttonComponentNotes)`
    }
)
.add("Only Icon Button", () => ({
     component: ButtonComponent,
     props: {
         text:"Only Icon Button"
     }
}));

