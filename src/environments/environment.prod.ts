//servis istekleri yapmak için environment dosyasında tutulması gerekir
//ileride servis url ini değiştirmek gerekirse tek bir yerden yönetmek daha kolay olacaktır

export const environment = {
  production: true,
  api: {
    nestjs: {
      role:"https://udemy-nestjs-course.herokuapp.com/api/" //başlangıç url i yazıldı
    }
  }
};


