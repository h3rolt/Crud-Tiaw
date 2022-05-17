// declara um conjunto inicial de clientes
var db_clientes_inicial = {
    "data": [{
            "id": 1,
            "nome": "Leanne Graham",
            "cidade": "Belo Horizonte",
            "categoria": "amigos",
            "email": "Sincere@april.biz",
            "telefone": "1-770-736-8031",
        },
        {
            "id": 2,
            "nome": "Ervin Howell",
            "cidade": "Betim",
            "categoria": "familia",
            "email": "Shanna@melissa.tv",
            "telefone": "010-692-6593",
        },
        {
            "id": 3,
            "nome": "Clementine Bauch",
            "cidade": "Rio de Janeiro",
            "categoria": "trabalho",
            "email": "Nathan@yesenia.net",
            "telefone": "1-463-123-4447",
        },
        {
            "id": 4,
            "nome": "Patricia Lebsack",
            "cidade": "Betim",
            "categoria": "trabalho",
            "email": "Julianne.OConner@kory.org",
            "telefone": "493-170-9623 x156",
        },
        {
            "id": 5,
            "nome": "Chelsey Dietrich",
            "cidade": "São Paulo",
            "categoria": "familia",
            "email": "Lucio_Hettinger@annie.ca",
            "telefone": "(254)954-1289",
        },
        {
            "id": 6,
            "nome": "Mrs. Dennis Schulist",
            "cidade": "Rio de Janeiro",
            "categoria": "trabalho",
            "email": "Karley_Dach@jasper.info",
            "telefone": "1-477-935-8478",
        },
        {
            "id": 7,
            "nome": "Kurtis Weissnat",
            "cidade": "Belo Horizonte",
            "categoria": "amigos",
            "email": "Telly.Hoeger@billy.biz",
            "telefone": "210.067.6132",
        },
        {
            "id": 8,
            "nome": "Nicholas Runolfsdottir V",
            "cidade": "Belo Horizonte",
            "categoria": "familia",
            "email": "Sherwood@rosamond.me",
            "telefone": "586.493.6943",
        },
        {
            "id": 9,
            "nome": "Glenna Reichert",
            "cidade": "Betim",
            "categoria": "amigos",
            "email": "Chaim_McDermott@dana.io",
            "telefone": "(775)976-6794",
        },
        {
            "id": 10,
            "nome": "Clementina DuBuque",
            "cidade": "São Paulo",
            "categoria": "amigos",
            "email": "Rey.Padberg@karina.biz",
            "telefone": "024-648-3804",
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_cliente'));
if (!db) {
    db = db_clientes_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertCliente(cliente) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0)
        novoId = db.data[db.data.length - 1].id + 1;
    let novoCliente = {
        "id": novoId,
        "nome": cliente.nome,
        "email": cliente.email,
        "telefone": cliente.telefone,
        "cidade": cliente.cidade,
        "categoria": cliente.categoria,
    };

    // Insere o novo objeto no array
    db.data.push(novoCliente);
    displayMessage("Cliente inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_cliente', JSON.stringify(db));
}

function updateCliente(id, cliente) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = cliente.nome,
        db.data[index].email = cliente.email,
        db.data[index].telefone = cliente.telefone,
        db.data[index].cidade = cliente.cidade,
        db.data[index].categoria = cliente.categoria,

        displayMessage("CLiente alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_cliente', JSON.stringify(db));
}

function deleteCliente(id) {
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function(element) { return element.id != id });

    displayMessage("Cliente removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_cliente', JSON.stringify(db));
}