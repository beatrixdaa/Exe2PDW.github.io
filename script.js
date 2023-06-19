function kirimData() {
    var name = document.getElementById("nama").value
    var audisi = document.querySelector("input[name=kotaudisi]:checked").value
    var Alamat = document.getElementById("alamat").value
    var Prestasi = document.getElementById("prestasi").value
    var gender = document.getElementById("jeniskelamin").value
    var date = document.getElementById("birthdaytime").value

    
    alert(
        "Nama : " + name +
        "\nTanggal Lahir : " + date +
        "\nJenis Kelamin : " + gender +
        "\nKota Tempat Audisi : " + audisi +
        "\nAlamat : " + Alamat +
        "\nPrestasi : " + Prestasi
    )
}