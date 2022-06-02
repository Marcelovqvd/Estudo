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

