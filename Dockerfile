#Projede hangi kütüphane kullanıldı.
FROM node:18-alpine

#Projenin kaynak dosyalarını nereye kopyalacak.
WORKDIR /app

#Gerekli dosyaların kopyalanması.
COPY package.json .

#package.json daki gerekli kütüphanelerin yüklenmesi için gerekli.
#Express, body-parser, vs.
RUN npm install

#"." bütün kaynak kodları -> "." workdir de belirttiğim klasöre kopyala.
COPY . .

#kullanılacak port.
EXPOSE 3000

#kullanılacak komutlar.
CMD ["npm", "start"]