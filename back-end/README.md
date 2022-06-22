# Web-GIS displays about PENS area kos information

## About

This is the API for PENS area kos information. It is a RESTful API that provides access to the users.

## Source Data

* [Mamikos](https://mamikos.com/)

## Build with

* [Laravel](http://expressjs.com/)

## Installation

_Below is an example of how you can instruct your audience on installing and setting up your app._

1. Clone the repo

   ```sh
   git clone https://github.com/zulfauzi92/Web-GIS.git
   ```

2. Install composer packages

   ```sh
   composer install
   ```

3. publish JWT package

   ```sh
   php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"
   ```

4. Create JWT-auth secret keys

   ```sh
   php artisan jwt:secret
   ```

5. Copy `.env.example` to `.env` and fill in the missing values.

6. Create database namely "office_system"

7. Run laravel migration

   ```sh
   php artisan migrate
   ```

8. Run the server
    ```sh
    php artisan serve
    ```

## API endpoints
Base URL : http://localhost:8000/api

### Kos
| Endpoint | Description | Parameter | Method|
| ------ | ------ | ------ | ------ |
| [/kos](http://localhost:8000/kos) | Get All Kos | - | GET |
| [/kos/:id](http://localhost:8000/kos/1) | Get Kos by Id | id | GET |

Usage
```sh
 GET http://localhost:8000/api/kos
```
Response
```json
{
  "data": [
    {
      "id": 1,
      "name": "Kost Deles Sukolilo Surabaya 796534DS",
      "description": "lokasi kos: masuk gang sebelah santana seafood. lanjut cari gang mawar dan masuk ke timur. kemudian tanya kos milik H. Rouf almarhum. atau tanya                       tempas kos Pak Turi/darmini. Listrik: biaya perbulan sudah termasuk listrik standard. yaitu: untuk cas hp/laptop, kipas angin, lampu. alat masak                       listrik dikenakan biaya tambahan 40rb/bln Fasilitas: kamar mandi luar parkiran motor kasur lemari pakaian meja belajar",
      "address": "Jln Deles 3 gang mawar",
      "latitude": -7.290544,
      "longitude": 112.782115,
      "kos_type": "Kos Putra",
      "distance": 2.97945619717851,
      "filename": "https://github.com/zulfauzi92/Web-GIS/blob/main/kos%20image/kos1/kos1-001.jpg"
    },
    {
      "id": 2,
      "name": "Kost Cak Husin Tipe B Keputih Sukolilo Surabaya RMZ 159CK",
      "description": "Tamu dilarang menginap",
      "address": "Jl. Arif Rahman Hakim Keputih No.59 Sukolilo Surabaya (Dekat Depo Air Isi Ulang Biru Keputih)",
      "latitude": -7.2899042,
      "longitude": 112.7966067,
      "kos_type": "Kos Putri",
      "distance": 2.849065184268282,
      "filename": "https://github.com/zulfauzi92/Web-GIS/blob/main/kos%20image/kos2/kos2-001.jpg"
    }
  ]
}
```

Usage
```sh
 GET http://localhost:8000/api/kos/1
```
Response
```json
{
  "detail_kos": {
    "id": 1,
    "name": "Kost Deles Sukolilo Surabaya 796534DS",
    "address": "Jln Deles 3 gang mawar",
    "description": "lokasi kos: masuk gang sebelah santana seafood. lanjut cari gang mawar dan masuk ke timur. kemudian tanya kos milik H. Rouf almarhum. atau tanya tempas kos Pak Turi/darmini. Listrik: biaya perbulan sudah termasuk listrik standard. yaitu: untuk cas hp/laptop, kipas angin, lampu. alat masak listrik dikenakan biaya tambahan 40rb/bln Fasilitas: kamar mandi luar parkiran motor kasur lemari pakaian meja belajar",
    "latitude": -7.290544,
    "longitude": 112.782115,
    "kos_type": "Kos Putra",
    "owner_name": "Pak Turi/darmini",
    "distance": 2.97945619717851,
    "gallery": [
      {
        "filename": "https://github.com/zulfauzi92/Web-GIS/blob/main/kos%20image/kos1/kos1-001.jpg"
      },
      {
        "filename": "https://github.com/zulfauzi92/Web-GIS/blob/main/kos%20image/kos1/kos1-002.jpg"
      },
      {
        "filename": "https://github.com/zulfauzi92/Web-GIS/blob/main/kos%20image/kos1/kos1-003.jpg"
      },
      {
        "filename": "https://github.com/zulfauzi92/Web-GIS/blob/main/kos%20image/kos1/kos1-004.jpg"
      }
    ],
    "facility": [
      {
        "name": "3 x 4 meter"
      },
      {
        "name": "Kamar mandi luar"
      },
      {
        "name": "Parkir"
      },
      {
        "name": "Lemari dan Meja"
      }
    ],
    "category_price": [
      {
        "name": "Per bulan",
        "price": 400000
      }
    ]
  }
}
```



