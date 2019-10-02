Regras:
Realizar em um período máximo de 4hrs para cada desafio;
Avaliaremos: padrão de projeto, entendimento do ecossistema, forma de resolução, objetividade e criatividade;
Publicar em github, informar o link e responder este email dizendo qual foi sua proposta.
Observação:
Este não é um projeto real, e foi criado somente para este desafio. Todas informações são lúdicas e a documentação é a mais breve por questões de tempo hábil, mas caso tenha alguma dúvida fique à vontade.

Descrição:
A Loticáryo é uma indústria de cosméticos que irá criar um aplicativo para que clientes possam conhecer os produtos, formas de aplicação, atributos, características e imagens.

Endpoints: https://api-39a-test.herokuapp.com
/products - Post ( Criar produto com as propriedades: name, description )
/products - Get Visualiza listagem de produtos
/products/id - Get Exemplo de resposta em anexo
/products - Put utilizar array de id's para administrar relacionamento entre categories, subcategories, attributes, features, applications conforme exemplo abaixo:
{
"description":"Aquele produto que todos amam.", "subcategories": [1 ], "categories": [1 ], "attributes": [1 ], "features": [1 ],"applications": [1 ]
}
/products/id/files - Post Multipart image + arquivo;

Os demais endpoints podem ser observados em:
/categories
/subcategories
/attributes
/features
/applications

Sugestão de solução
Projeto React JS: CRUD do endpoint "products", onde se espera a listagem, detalhes, inclusão e alteração de um produto, possibilitando a inclusão de arquivos.
Projeto React Native: Listagem do endpoint "products", onde se espera a listagem dos itens e navegação para apresentação de detalhes dos itens da forma desejada.

Sinta-se à vontade para realizar e utilizar com o conhecimento que tiver, não há limite de pacotes, temas, referências ou quaisquer recursos que deseja adicionar.
A liberdade que entregamos neste teste é para possibilitar que cada um use seu conhecimento.
