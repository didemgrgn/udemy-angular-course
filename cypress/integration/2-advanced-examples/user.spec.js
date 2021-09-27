/// <reference types="cypress"/>
const getByTestId = id => cy.get(`[data-cy="${id}]`); //getByTestId => sidebar.component.html deki data-cy olanı çekecek
const getByNameTag = id => cy.get(`[name="${id}"]`);

context('user list stories', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:4200').then(() =>{ //beforeEach denildiği için hepsinin localhost:4200 e gidiyor
            cy.get(".toast-success").should("be.visible"); //toast-success çalıştır hoşgeldiniz yazan alan
        });
    })

    it("it should route user list", () =>{  //user listesinde kullanıcılar varsa  (data-cy)
        getByTestId("Kullanıcılar")
        .should("exist") //user listesi varsa
        .then(()=>{
            getByTestId("Kullanıcılar")
            .first() //eğer birden fazla span a tıkla(user) varsa ilkine tıkla
            .click({
                force: true //Varsa ona tıkla force ile de zorluyorum
            });
        });
    });

    it('addButton Click',() => { //kullanıcılara tıklandı
        getByTestId("Kullanıcılar")
        .should("exist")
        .then(()=>{
            getByTestId("Kullanıcılar") //kullanıcılar sayfası açıldı
            .first()
            .click({
                force:true
            });
            cy.get('.add-button').click().then(()=>{ //addButton => user-list.component.html deki , add-button varsa tıkla
                cy.get(".user-list-item").should("be.visible") //user-list-item ın görünür olmasını bekliyoruz
                //en başta açılırken yok tıkladıktan sonra var oluyor
            });
        });
    })

})