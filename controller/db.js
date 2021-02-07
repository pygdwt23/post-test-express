let books = [
  {
    isbn: 1,
    judul: "Seni Ternak Lele Untuk Pemula",
    sinopsis:
      "Buku ini cocok untuk pemula yang ingin memulai berbudidaya lele, belilah buku ini!",
    penulis: "Kim Jong Un",
    genre: "Wirausaha",
  },
  {
    isbn: 2,
    judul: "Kenikmatan Kopi Sianida",
    sinopsis:
      "Kopi Sianida merupakan terobosan baru dalam dunia perkopian, rasanya sangat khas dan nikmat. Coba sekarang!",
    penulis: "Jessica Wongso",
    genre: "Kuliner",
  },
  {
    isbn: 3,
    judul: "Tata Cara Bermain TikTok Dengan Etika",
    sinopsis:
      "Buku ini akan mengajarkan milenial tata cara bermain TikTok dengan etika agar tidak ditekel netizen",
    penulis: "Seto Mulyadi",
    genre: "Kreatif",
  },
  {
    isbn: 4,
    judul: "Pengalaman Mati Suri",
    sinopsis:
      "Buku ini mengisahkan pengalaman seorang pemuda yang pernah mati suri selama 8 jam. Ceritanya pemuda tersebut kecapean dan tiba-tiba jatuh di kasur tidak sadarkan diri sekitar jam 9 malam dan hidup kembali sekitar jam 5 subuh",
    penulis: "Ni Luh Ketut Arum",
    genre: "Spiritual",
  },
];

exports.getAllBook = (req, res) => {
  return res.status(200).json({
    success: true,
    books,
  });
};

exports.getBookById = (req, res) => {
  const newBook = books.find((i) => i.isbn === +req.params.isbn);
  if (newBook !== undefined) {
    res.status(200).json(newBook);
  } else {
    res.status(404).json({
      error: true,
      message: `ERROR 404, FILE NOT FOUND`,
    });
  }
};

exports.postNewBook = (req, res) => {
  const { judul, sinopsis, penulis, genre } = req.body;

  const isbn = books[books.length - 1].isbn + 1;

  const newPost = {
    isbn,
    judul,
    sinopsis,
    penulis,
    genre,
  };
  books.push(newPost);
  res.status(201).json({ message: `Data baru berhasil ditambahkan!` });
};

exports.putBook = (req, res) => {
  let isbn = req.params.isbn;
  books.filter((data) => {
    if (data.isbn === parseInt(isbn)) {
      (data.judul = req.body.judul),
        (data.sinopsis = req.body.sinopsis),
        (data.penulis = req.body.penulis),
        (data.genre = req.body.genre);
      return data;
    }
  });
  res.status(200).json({
    message: `Buku dengan ISBN ${req.params.isbn} berhasil diperbarui!`,
  });
};

exports.deleteBook = (req, res) => {
  books = books.filter((i) => i.isbn !== +req.params.isbn);
  res.status(200).json({
    message: `Buku dengan ISBN ${req.params.isbn} udah dihapus!`,
  });
};
