document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('#mini-categories button');
    const contentDiv = document.getElementById('category-content-a');
    const contentBiv = document.getElementById('category-content-b');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const category = button.getAttribute('data-category');
            loadCategoryContent(category);
        });
    });

    function loadCategoryContent(category) {
        // Limpa o conteúdo existente
        contentDiv.innerHTML = '';

        switch (category) {
            case 'dogs':
                contentDiv.innerHTML = `
                    <h3>Cachorros</h3>
                    <div class="cat">
                        <button class="cat-arrow left">&#10094;</button>
                        <div class="cat-track-container">
                            <div class="cat-track">
                                <a href="#"><button><img src="../Images/categoria/cachorro/chiwawa.jpg" alt="Cachorro 1"><p>Companheirismo e Lealdade <br> Inteligência e Treinabilidade</p><br><span>R$3.800</span><div><strong>Chihuahua</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/cachorro/husky.jpeg" alt="Cachorro 2"><p>Energia e Vitalidade <br> Sociabilidade e Amizade</p><br><span>R$2.100</span><div><strong>Huskys</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/cachorro/pitbull.jpeg" alt="Cachorro 3"><p>Lealdade e Afeto <br> Coragem e Determinação</p><br><span>R$1.000</span><div><strong>Pitbull</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/cachorro/puddle.jpeg" alt="Cachorro 4"><p>Inteligência e Treinabilidade <br> Pelagem Hipoalergênica</p><br><span>R$1.400</span><div><strong>Poodle</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/cachorro/golden.jpeg" alt="Cachorro 5"><p>Temperamento Amigável <br> Inteligência e Treinabilidade</p><br><span>R$5.100</span><div><strong>Golden</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/cachorro/pinscher.jpg" alt="Cachorro 6"><p>Energia e Vitalidade <br> Lealdade e Proteção</p><br><span>R$700</span><div><strong>Pinscher</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/cachorro/pastor-alemao.jpeg" alt="Cachorro 7"><p>Inteligência e Versatilidade <br> Lealdade e Protetor</p><br><span>R$3.500</span><div><strong>Pastor alemão</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/cachorro/shih-tzu.jpeg" alt="Cachorro 8"><p>Personalidade Carinhosa <br> Adaptabilidade</p><br><span>R$2.100</span><div><strong>Shih Tzu</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/cachorro/Adote.jpg" alt="Cachorro 9"><h3>Adote</h3><br><span>Saiba mais...</span><div></button></a>
                                
                            </div>
                        </div>
                        <button class="cat-arrow right">&#10095;</button>
                    </div>
                `;
                
                product(category);
                addCatFunctionality();
                break;
            case 'cats':
                contentDiv.innerHTML = `
                    <h3>Gatos</h3>
                    <div class="cat">
                        <button class="cat-arrow left">&#10094;</button>
                        <div class="cat-track-container">
                            <div class="cat-track">
                                <a href="#"><button><img src="../Images/categoria/gato/azul-russo.jpeg" alt="Gato 1"><p>Pelagem Macia <br> Temperamento Calmo</p><br><span>R$1.800</span><div><strong>Azul Russo</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/gato/Bobtail.jpeg" alt="Gato 2"><p>Personalidade Amigável <br> Cauda Curta e Distinta</p><br><span>R$1.300</span><div><strong>Bobtail</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/gato/Burmes.jpeg" alt="Gato 3"><p>Personalidade Afetuosa <br> Energia e Curiosidade</p><br><span>R$2.500</span><div><strong>Burmês</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/gato/Maine-coon.jpeg" alt="Gato 4"><p>Tamanho Imponente <br> Temperamento Amigável</p><br><span>R$3.000</span><div><strong>Maine Coon</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/gato/Somali.jpeg" alt="Gato 5"><p>Pelagem Atraente <br> Personalidade Ativa</p><br><span>R$4.900</span><div><strong>Somali</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/gato/Ragdoll.jpg" alt="Gato 6"><p>Temperamento Calmo <br> Pelagem Longa e Sedosa</p><br><span>R$3.000</span><div><strong>Ragdoll</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/gato/Siberiano.jpg" alt="Gato 7"><p>Pelagem Espessa <br> Personalidade Afetuosa</p><br><span>R$7.000</span><div><strong>Siberiano</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/gato/Siames.jpeg" alt="Gato 8"><p>Vocalização e Comunicação <br> Aparência Elegante</p><br><span>R$3.200</span><div><strong>Siamês</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/gato/Adote.jpeg" alt="Gato 9"><h3>Adote</h3><br><span>Saiba mais...</span><div></button></a>
                                
                            </div>
                        </div>
                        <button class="cat-arrow right">&#10095;</button>
                    </div>
                `;
                product(category);
                addCatFunctionality();
                break;
            case 'birds':
                contentDiv.innerHTML = `
                    <h3>Pássaros</h3>
                    <div class="cat">
                        <button class="cat-arrow left">&#10094;</button>
                        <div class="cat-track-container">
                            <div class="cat-track">
                                <a href="#"><button><img src="../Images/categoria/passaro/Agapornis.jpeg" alt="Passaro 1"><p>Natureza Afetuosa <br> Cores Vibrantes</p><br><span>R$120</span><div><strong>Agapornis</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/passaro/Arara.jpg" alt="Passaro 2"><p>Plumagem Vibrante <br> Inteligência</p><br><span>R$20.000</span><div><strong>Arara</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/passaro/Cacatua.jpeg" alt="Passaro 3"><p>Personalidade Brincalhona <br> Capacidade de Comunicação</p><br><span>R$15.000</span><div><strong>Cacatua</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/passaro/Calopsita.jpeg" alt="Passaro 4"><p>Personalidade Amigáve <br> Canto e Imitação de Sons</p><br><span>R$100</span><div><strong>Calopsita</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/passaro/Canario.jpeg" alt="Passaro 5"><p>Canto Melodioso <br> Variedade de Cores</p><br><span>R$50</span><div><strong>Canário</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/passaro/Papagaio.jpeg" alt="Passaro 6"><p>Capacidade de Imitação <br> Personalidade Envolvente</p><br><span>R$4.000</span><div><strong>Papagaio</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/passaro/Periquito.jpeg" alt="Passaro 7"><p>Fácil Cuidado <br> Personalidade Sociável</p><br><span>R$20</span><div><strong>Periquito</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/passaro/Outros.jpg" alt="Passaro 8"><h4>Encontre outras espécies</h4><br><span>Saiba mais...</span><div></button></a>
                                
                            </div>
                        </div>
                        <button class="cat-arrow right">&#10095;</button>
                    </div>
                `;
                product(category);
                addCatFunctionality();
                break;
            case 'reptiles':
                contentDiv.innerHTML = `
                    <h3>Répteis</h3>
                    <div class="cat">
                        <button class="cat-arrow left">&#10094;</button>
                        <div class="cat-track-container">
                            <div class="cat-track">
                                <a href="#"><button><img src="../Images/categoria/reptil/Calango.jpeg" alt="Reptil 1"><p>Adaptabilidade <br> Comportamento Ativo</p><br><span>R$100</span><div><strong>Calango</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/reptil/Camaleao.jpg" alt="Reptil 2"><p>Mudança de Cor <br> Visão Excepcional</p><br><span>R$600</span><div><strong>Camaleão</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/reptil/Dragao-barbado.jpeg" alt="Reptil 3"><p>Personalidade Amigável <br> Facilidade de Cuidados</p><br><span>R$2.300</span><div><strong style="margin-right: 20px">Dragão Barbudo</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/reptil/Gecko.jpeg" alt="Reptil 4"><p>Habilidade de Escalar <br> Variedade de Espécies</p><br><span>R$1.800</span><div><strong>Gecko</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/reptil/Iguana.jpeg" alt="Reptil 5"><p>Tamanho Imponente <br> Dieta Herbívora</p><br><span>R$1.200</span><div><strong>Iguana</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/reptil/Tartaruga.jpeg" alt="Reptil 6"><p>Longevidade e Vida Longa <br> Variedade de Espécies</p><br><span>R$200</span><div><strong>Tartaruga</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/reptil/Serpente.jpeg" alt="Reptil 7"><p>Diversidade de Espécies <br> Habilidade de Caçar</p><br><span>R$2.000</span><div><strong>Serpente</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/reptil/Cobra.jpg" alt="Reptil 8"><p>Diversidade <br> Mecanismos de Defesa </p><br><span>R$800</span><div><strong>Cobra</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/reptil/Tegu.jpeg" alt="Reptil 9"><p>Inteligência e Interatividade <br> Aparência Imponente</p><br><span>R$900</span><div><strong>Tegu</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/reptil/Outro.jpg" alt="Reptil 10"><h4>Encontre outras espécies</h4><br><span>Saiba mais...</span><div></button></a> 
                            </div>
                        </div>
                        <button class="cat-arrow right">&#10095;</button>
                    </div>
                `;
                product(category);
                addCatFunctionality();
                break;
            case 'marines':
                contentDiv.innerHTML = `
                <h3>Marinhos</h3>
                <div class="cat">
                    <button class="cat-arrow left">&#10094;</button>
                    <div class="cat-track-container">
                        <div class="cat-track">
                            <a href="#"><button><img src="../Images/categoria/marinho/Estrela-do-mar.jpeg" alt="marinho 1"><p>Controle de Algas e Detritos <br> Beleza e Variedade de Cores</p><br><span>R$200</span><div><strong>Estrela-do-mar</strong></div></button></a>
                            <a href="#"><button><img src="../Images/categoria/marinho/Axolote.jpg" alt="marinho 2"><p>Capacidade de Regeneração <br> Aparência Distintiva</p><br><span>R$230</span><div><strong>Axolote</strong></div></button></a>
                            <a href="#"><button><img src="../Images/categoria/marinho/Peixe-cirurgiao.jpeg" alt="marinho 3"><p>Controle de Algas <br> Beleza e Padrões Coloridos</p><br><span>R$50</span><div><strong>Peixe-cirurgião</strong></div></button></a>
                            <a href="#"><button><img src="../Images/categoria/marinho/Peixe-palhaco.jpeg" alt="marinho 4"><p>Relação com Anêmonas <br> Cores Vibrantes e Atraentes</p><br><span>R$30</span><div><strong>Peixe-palhaço</strong></div></button></a>
                            <a href="#"><button><img src="../Images/categoria/marinho/Caranguejo-eremita.jpeg" alt="marinho 5"><p>Função de Limpeza <br> Comportamento Interessante</p><br><span>R$210</span><div><strong style="margin-right: 20px">Caranguejo-eremita</strong></div></button></a>
                            <a href="#"><button><img src="../Images/categoria/marinho/Anemona-do-mar.jpg" alt="marinho 6"><p>Estética e Beleza <br> Proteção para Peixes</p><br><span>R$1.200</span><div><strong style="margin-right: 30px">Anêmona-do-mar</strong></div></button></a>
                            <a href="#"><button><img src="../Images/categoria/marinho/Camarao.jpg" alt="marinho 7"><p>Função de Limpeza <br> Comportamento Interessante</p><br><span>R$15</span><div><strong>Camarão</strong></div></button></a>
                            <a href="#"><button><img src="../Images/categoria/marinho/Peixe-limpador.jpg" alt="marinho 8"><p>Manutenção do Aquário <br> Comportamento Social</p><br><span>R$40</span><div><strong>Peixe-limpador</strong></div></button></a>
                            <a href="#"><button><img src="../Images/categoria/marinho/Outro.jpeg" alt="marinho 9"><h4>Encontre outras espécies</h4><br><span>Saiba mais...</span></button></a> 
                        </div>
                    </div>
                    <button class="cat-arrow right">&#10095;</button>
                </div>
            `;
            product(category);
            addCatFunctionality();
            break;
            default:
                contentDiv.innerHTML = `
                <h3>Mais</h3>
                <div class="cat">
                    <div class="cat-track-container">
                        <div class="cat-track">
                        <a href="#"><button><img src="../Images/categoria/Mais.jpeg" alt="outro"><h4>Explore mais</h4><br><span>Saiba mais...</span></button></a> 
                        </div>
                    </div>
                </div>
            `;
            product(category);
            addCatFunctionality();
        }
    }

    function product(category){
        contentBiv.innerHTML = '';

        switch (category) {
            case 'dogs':
                contentBiv.innerHTML = `
                    <h3>Rações</h3>
                    <div class="cat">
                        <div class="cat-track-containeri">
                            <div class="cat-tracki">
                                <a href="#"><button><img src="../Images/categoria/cachorro/produto/racao/Affinity-GranPlus.jpg" alt="Racao 1"><p>Affinity GranPlus - Choice Cães Adultos Frango Carne, Ração Guabi, 15kg</p><div><strong>R$80,50</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/cachorro/produto/racao/Hill's-Science.jpg" alt="Racao 2"><p>Ração Hill's Science Diet para Cães Adultos 7+ Pedaços Pequenos 6kg</p><div><strong>R$98,20</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/cachorro/produto/racao/Nestle-Purina-One.jpg" alt="Racao 3"><p>NESTLÉ® PURINA® ONE® Ração Seca para cães adultos Médios e Grandes Frango e Carne 15kg</p><div><strong>R$99,99</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/cachorro/produto/racao/Pedigree.jpg" alt="Racao 4"><p>PEDIGREE Ração Pedigree Para Cães Filhotes Raças Médias E Grandes 10 1 Kg</p><div><strong>R$85,90</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/cachorro/produto/racao/Premier-Pet-Golden.jpg" alt="Racao 5"><p>Premier Pet Golden Special - Ração para Cães Adultos, Sabor Frango e Carne, 15kg</p><div><strong>R$110,10</strong></div></button></a>
                            </div>
                        </div>
                    </div>
                    
                    <h3>Brinquedos</h3>
                    <div class="cat">
                        <div class="cat-track-containeri">
                            <div class="cat-tracka">
                                <a href="#"><button><img src="../Images/categoria/cachorro/produto/brinquedo/Donut.jpg" alt="Racao 1"><p>Pelúcia Kroco Donut</p><div><strong>R$89,99</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/cachorro/produto/brinquedo/Puxador.jpeg" alt="Racao 2"><p>Brinquedo de Corda Kroco Puxador</p><div><strong>R$50,20</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/cachorro/produto/brinquedo/Bola.webp" alt="Racao 3"><p>Brinquedo Kroco Bola Cravinho para Cães</p><div><strong>R$20,10</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/cachorro/produto/brinquedo/Coxa.webp" alt="Racao 4"><p>Mordedor Kroco Coxa Azul para Cães</p><div><strong>R$24,90</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/cachorro/produto/brinquedo/Mordedor.webp" alt="Racao 5"><p>Mordedor Kroco Osso Aromatizado Bacon para Cães</p><div><strong>R$30,80</strong></div></button></a>
                            </div>
                        </div>
                    </div>

                    <h3>Acessórios</h3>
                    <div class="cat">
                        <div class="cat-track-containeri">
                            <div class="cat-tracka">
                                <a href="#"><button><img src="../Images/categoria/cachorro/produto/acessorio/Utensilios.png" alt="Racao 1"><p>Utensílios para facilitar a sua vida e do seu cachorro</p><div><strong>Saiba mais</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/cachorro/produto/acessorio/Casa.jpeg" alt="Racao 2"><p>Mais conforto para o seu cachorro</p><div><strong>Saiba mais</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/cachorro/produto/acessorio/Coleiras.webp" alt="Racao 3"><p>Coleiras de várias cores para o seu gosto</p><div><strong>Saiba mais</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/cachorro/produto/acessorio/Produtos.webp" alt="Racao 4"><p>Produtos para deixar o seu cachorro mais cheiroso</p><div><strong>Saiba mais</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/cachorro/produto/acessorio/Roupas.jpeg" alt="Racao 5"><p>Roupas para deixar o seu cão mais estiloso</p><div><strong>Saiba mais</strong></div></button></a>
                            </div>
                        </div>
                    </div>
                `;
                addCatFunctionality();
                break;
            case 'cats':
                contentBiv.innerHTML = `
                    <h3>Rações</h3>
                    <div class="cat">
                        <div class="cat-track-containeri">
                            <div class="cat-tracke">
                                <a href="#"><button><img src="../Images/categoria/gato/produto/racao/Equilibrio.jpg" alt="Gato 1"><p>Ração Seca Equilíbrio Frango para Gatos Castrados</p><div><strong>R$130,00</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/gato/produto/racao/Nestle-Purina.jpg" alt="Gato 2"><p>Ração Seca Nestlé Purina Pro Plan Trato Urinário Frango para Gatos Adultos</p><div><strong>R$210,20</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/gato/produto/racao/Nutrilus-pro.webp" alt="Gato 3"><p>Ração Seca Nutrilus Pro+ Salmão para Gatos Adultos Castrados</p><div><strong>R$190,50</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/gato/produto/racao/Suprema.jpg" alt="Gato 4"><p>Ração Seca Suprema Sabor Carne para Gatos Adultos</p><div><strong>R$91,20</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/gato/produto/racao/True.webp" alt="Gato 5"><p>Ração Seca True para Gatos Adultos Castrados</p><div><strong>R$59,99</strong></div></button></a>
                                
                            </div>
                        </div>
                    </div>

                    <h3>Brinquedos</h3>
                    <div class="cat">
                        <div class="cat-track-containeri">
                            <div class="cat-tracka">
                                <a href="#"><button><img src="../Images/categoria/gato/produto/brinquedo/Bola.webp" alt="Racao 1"><p>Brinquedo Kroco Bolinha 6 Unidades Coloridas para Gatos</p><div><strong>R$6,30</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/gato/produto/brinquedo/Centopeia.webp" alt="Racao 2"><p>Brinquedo Kroco Centopeia para Gatos</p><div><strong>R$19,99</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/gato/produto/brinquedo/Peixe.webp" alt="Racao 3"><p>Brinquedo Kroco Peixe para Gatos</p><div><strong>R$8,10</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/gato/produto/brinquedo/Chalesco.webp" alt="Racao 4"><p>Brinquedo Chalesco Kitty Ball Cores Variadas</p><div><strong>R$39,90</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/gato/produto/brinquedo/Penas.webp" alt="Racao 5"><p>Brinquedo Kroco Bolinha Pelúcia com Penas para Gatos</p><div><strong>R$30,80</strong></div></button></a>
                            </div>
                        </div>
                    </div>

                    <h3>Acessórios</h3>
                    <div class="cat">
                        <div class="cat-track-containeri">
                            <div class="cat-tracka">
                                <a href="#"><button><img src="../Images/categoria/gato/produto/acessorio/Utensilios.jpg" alt="Racao 1"><p>Utensílios para facilitar a sua vida e do seu felino</p><div><strong>Saiba mais</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/gato/produto/acessorio/Cama.jpeg" alt="Racao 2"><p>Mais conforto para o seu gato</p><div><strong>Saiba mais</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/gato/produto/acessorio/Roupa.webp" alt="Racao 3"><p>Roupas para deixar o seu gato mais estiloso</p><div><strong>Saiba mais</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/gato/produto/acessorio/Produto.jpg" alt="Racao 4"><p>Produtos para deixar o seu gato mais cheiroso</p><div><strong>Saiba mais</strong></div></button></a>
                            </div>
                        </div>
                    </div>
                `;
                addCatFunctionality();
                break;
            case 'birds':
                contentBiv.innerHTML = `
                    <h3>Rações</h3>
                    <div class="cat">
                        <div class="cat-track-containeri">
                            <div class="cat-tracke">
                                <a href="#"><button><img src="../Images/categoria/passaro/produto/racao/MegazooCa.webp" alt="Passaro 1"><p>Ração Seca Megazoo Mix para Calopsitas 6,0kg</p><div><strong>R$49,99</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/passaro/produto/racao/MegazooLo.webp" alt="Passaro 2"><p>Alimento Seco Megazoo Papa para Loris 900gr</p><div><strong>R$60,00</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/passaro/produto/racao/MegazooPa.webp" alt="Passaro 3"><p>Ração Seca Megazoo Para Papagaio Tropical 6,0kg</p><div><strong>R$69,99</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/passaro/produto/racao/Nutropica.webp" alt="Passaro 4"><p>Ração Nutrópica para Papagaios Extrusada com Frutas 5kg</p><div><strong>R$25,70</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/passaro/produto/racao/Passaro-forte.webp" alt="Passaro 5"><p>Alimento Pássaro Forte Extrusado para Papagaios 1kg</p><div><strong>R$34,99</strong></div></button></a>
                            </div>
                        </div>
                    </div>

                    <h3>Brinquedos</h3>
                    <div class="cat">
                        <div class="cat-track-containeri">
                            <div class="cat-tracka">
                                <a href="#"><button><img src="../Images/categoria/Passaro/produto/brinquedo/Arco.jpg" alt="Racao 1"><p>Brinquedo Passaritos Toys Balanço Arco Para Pássaros</p><div><strong>R$30,20</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/Passaro/produto/brinquedo/Balanco.jpg" alt="Racao 2"><p>Brinquedo Pawise Balanço Suspenso para Pássaros</p><div><strong>R$29,99</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/Passaro/produto/brinquedo/Bola.jpg" alt="Racao 3"><p>Brinquedo Pawise Bola Oca para Pássaros</p><div><strong>R$9,15</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/Passaro/produto/brinquedo/Pedra.jpg" alt="Racao 4"><p>Brinquedo Kakatoo Bica Pedra Badalo com Poleiro para Pássaros</p><div><strong>R$49,90</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/Passaro/produto/brinquedo/Rede.jpg" alt="Racao 5"><p>Brinquedo Still Pet Rede de Balanço para Pássaros</p><div><strong>R$20,80</strong></div></button></a>
                            </div>
                        </div>
                    </div>

                    <h3>Acessórios</h3>
                    <div class="cat">
                        <div class="cat-track-containeri">
                            <div class="cat-tracka">
                                <a href="#"><button><img src="../Images/categoria/passaro/produto/acessorio/Banheira.jpeg" alt="Racao 1"><p>Mais conforto para o seu pássaro</p><div><strong>Saiba mais</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/passaro/produto/acessorio/Gaiola.jpeg" alt="Racao 2"><p>Gaiolas de vários tamanhos e cores para as suas aves</p><div><strong>Saiba mais</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/passaro/produto/acessorio/Ninho.jpeg" alt="Racao 3"><p>Ninho para fazer sua geração de aves</p><div><strong>Saiba mais</strong></div></button></a>
                            </div>
                        </div>
                    </div>
                `;
                addCatFunctionality();
                break;
            case 'reptiles':
                contentBiv.innerHTML = `
                    <h3>Rações</h3>
                    <div class="cat">
                        <div class="cat-track-containeri">
                            <div class="cat-tracke">
                                <a href="#"><button><img src="../Images/categoria/reptil/produto/racao/Alcon-Club.webp" alt="Passaro 1"><p>Ração Para Jabuti Alcon Club Jabuti 300g Alimento Completo</p><div><strong>R$39,99</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/reptil/produto/racao/Megazoo.webp" alt="Passaro 2"><p>Megazoo Jabuti Filhotes 200g - Envio Full</p><div><strong>R$27,20</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/reptil/produto/racao/Nutricon-Baby.webp" alt="Passaro 3"><p>Ração Turtle Baby Nutricon Com 5 Unidades De 10g</p><div><strong>R$22,00</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/reptil/produto/racao/Nutricon.jpg" alt="Passaro 4"><p>Ração Nutricon Turtle para Tartarugas</p><div><strong>R$25,00</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/reptil/produto/racao/Alcon-club.jpg" alt="Passaro 5"><p>Ração Alcon Club Répteis para Jabuti e Iguana 60g</p><div><strong>69,99</strong></div></button></a>
                            </div>
                        </div>
                    </div>

                    <h3>Acessórios</h3>
                    <div class="cat">
                        <div class="cat-track-containeri">
                            <div class="cat-tracka">
                                <a href="#"><button><img src="../Images/categoria/reptil/produto/acessorio/Decoracoes.jpg" alt="Racao 1"><p>Várias decorações para deixar a casa do réptil mais bonita</p><div><strong>Saiba mais</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/reptil/produto/acessorio/Aquarios.webp" alt="Racao 2"><p>Aquarios de vários tamanhos e tipos para o seu réptil</p><div><strong>Saiba mais</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/reptil/produto/acessorio/Luzes.webp" alt="Racao 3"><p>Mais conforto para o seu réptil</p><div><strong>Saiba mais</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/reptil/produto/acessorio/Produtos.webp" alt="Racao 3"><p>Produtos para deixar o réptil melhor</p><div><strong>Saiba mais</strong></div></button></a>
                            </div>
                        </div>
                    </div>
                `;
                addCatFunctionality();
                break;
            case 'marines':
                contentBiv.innerHTML = `
                    <h3>Rações</h3>
                    <div class="cat">
                        <div class="cat-track-containeri">
                            <div class="cat-tracke">
                                <a href="#"><button><img src="../Images/categoria/marinho/produto/racao/Jbl.jpg" alt="Passaro 1"><p>Ração Para Peixes Jbl Novobel 250ml 45g Jbl Para Peixes</p><div><strong>R$18,15</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/marinho/produto/racao/NutriconBo.jpg" alt="Passaro 2"><p>Bottom Fish 150gr Nutricon Para Peixe Tropical Todas As Fases</p><div><strong>R$25,20</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/marinho/produto/racao/NutriconPre.jpg" alt="Passaro 3"><p>Premium Flakes 50gr Nutricon Para Todos Os Tipos de Peixe Adulto</p><div><strong>R$22,00</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/marinho/produto/racao/NutriconSpi.jpg" alt="Passaro 4"><p>Spirulina Fish 100g Nutricon Para Peixe Tropical Todas As Fases</p><div><strong>R$12,30</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/marinho/produto/racao/Poytara.jpg" alt="Passaro 5"><p>Poytara Ração Para Peixes Tropicais Dia Até Dia 35G Para Peixes</p><div><strong>12,99</strong></div></button></a>
                            </div>
                        </div>
                    </div>

                    <h3>Acessórios</h3>
                    <div class="cat">
                        <div class="cat-track-containeri">
                            <div class="cat-tracka">
                                <a href="#"><button><img src="../Images/categoria/marinho/produto/acessorio/aquario.jpeg" alt="Racao 1"><p>Aquarios de vários tamanhos e tipos para o seu peixe</p><div><strong>Saiba mais</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/marinho/produto/acessorio/Decoracao.webp" alt="Racao 2"><p>Várias decorações para deixar a casa do seu peixe mais bonita</p><div><strong>Saiba mais</strong></div></button></a>
                                <a href="#"><button><img src="../Images/categoria/marinho/produto/acessorio/Utensilios.jpg" alt="Racao 3"><p>Ferramentas para facilitar a sua vida e a do seu peixe</p><div><strong>Saiba mais</strong></div></button></a>
                            </div>
                        </div>
                    </div>
            `;
            addCatFunctionality();
            break;
            default:
                contentBiv.innerHTML = `
                <h3>Outros</h3>
                <div class="cat">
                    <div class="cat-track-containeri">
                        <div class="cat-track">
                        <a href="#"><button><img src="../Images/categoria/Outros.jpeg" alt="outro"><h4>Encontre mais rações</h4></button></a> 
                        </div>
                    </div>
                </div>
            `;
            addCatFunctionality();
        }
    }

    function addCatFunctionality() {
        const track = document.querySelector('.cat-track');
        const leftArrow = document.querySelector('.cat-arrow.left');
        const rightArrow = document.querySelector('.cat-arrow.right');
        let currentIndex = 0;

        function updateCat() {
            const trackWidth = track.scrollWidth;
            const containerWidth = track.parentElement.clientWidth;
            const maxIndex = Math.ceil(trackWidth / containerWidth) - 1;

            if (currentIndex > maxIndex) currentIndex = maxIndex;
            if (currentIndex < 0) currentIndex = 0;

            const offset = -currentIndex * containerWidth;
            track.style.transform = `translateX(${offset}px)`;
        }

        leftArrow.addEventListener('click', () => {
            currentIndex--;
            updateCat();
        });

        rightArrow.addEventListener('click', () => {
            currentIndex++;
            updateCat();
        });

        // Iniciar com o conteúdo do primeiro slide visível
        updateCat();
    }

    // Carregar conteúdo inicial
    loadCategoryContent('dogs');
    product('dogs');
});