# Aprovaê — Plataforma de aprendizagem

Trilhas de estudo no estilo "fases": cada fase começa com uma **lição curta** e termina com um **quiz no estilo da banca**. Também tem flashcards, estudo por tópico, caderno de erros e acompanhamento de desempenho.

Produtos:

- **Aprovaê+Concursos** (disponível): concurso da Prefeitura de Saquarema/RJ, PSP nº 001/2026 (IBAM), cargos ACS e ACE
- **Aprovaê+ENCCEJA** (disponível): Encceja 2027, Ensino Médio, com 5 unidades (Linguagens, Matemática, Natureza, Humanas e Redação) e laboratório de redação
- **Aprovaê+ENEM**, **Aprovaê+Faetec** e **Aprovaê+Graduação** (em breve)

O site é **100% estático**: HTML, CSS e JavaScript puros, sem framework e sem etapa de build.

## Estrutura

```
index.html                        página única (rotas por #hash)
manifest.webmanifest              dados para instalar como app (PWA)
vercel.json                       configuração da Vercel
assets/
  css/app.css                     todos os estilos (mobile, tablet e desktop)
  js/app.js                       telas, navegação, quiz, flashcards, progresso
  js/map.js                       desenho da trilha (grama, caminho e ilustrações)
  js/content/saquarema-2026.js    conteúdo do concurso de Saquarema
  js/content/encceja-2027.js      conteúdo do Encceja 2027 (Ensino Médio)
  img/                            logo, favicon, ícones do app e imagem de prévia (og-aprovae-selo.jpg)
  mascote/                        robô oficial: uma pose por arquivo (WebP + PNG transparente)
```

Rotas:

- `#inicio`: Home com os produtos
- `#concursos` e `#encceja`: lista de provas de cada produto
- `#saquarema-2026` e `#encceja-2027`: trilha de cada prova

## Rodar no computador

Abra a pasta com qualquer servidor estático, por exemplo:

```bash
python3 -m http.server 8080
# depois acesse http://localhost:8080
```

Também funciona abrindo o `index.html` direto no navegador.

## Publicar no GitHub e na Vercel

1. Crie um repositório vazio no GitHub, por exemplo `aprovae`.
2. Na pasta do projeto, rode:

   ```bash
   git remote add origin https://github.com/SEU-USUARIO/aprovae.git
   git branch -M main
   git push -u origin main
   ```

   Sem usar o terminal: no GitHub, abra o repositório vazio, clique em **"uploading an existing file"** e arraste todos os arquivos e pastas.
3. Na Vercel: **Add New → Project → Import** o repositório.
   - Framework Preset: **Other**
   - Build Command: deixe vazio
   - Output Directory: deixe vazio (raiz)
4. Clique em **Deploy**. A cada `git push`, a Vercel publica a nova versão sozinha.

## Adicionar um novo concurso

1. Copie `assets/js/content/saquarema-2026.js` para um arquivo novo, como `outro-concurso.js`.
2. Troque o `id`, os dados do edital (`nome`, `banca`, `prova`, `cargos`, `areas`, `corte`, `total`) e o conteúdo (`UNITS` e `FC_RAW`).
3. Adicione `<script src="assets/js/content/outro-concurso.js"></script>` no `index.html`, antes do `map.js`.

O concurso aparece sozinho na lista do produto indicado em `produto` (`concursos`, `encceja`...).

Campos opcionais úteis: `prova: null` com `provaTexto` (data ainda não definida), `scoring: 'areas'` com `metaAcerto` (provas avaliadas por área, como o Encceja), `aulaLabel: 'AULA'`, `guia` (tela “Sobre a prova”), `documentos`, `dica`, `notaInfo` e `onbNota`. Se houver só um cargo/perfil, a escolha de cargo é pulada.

Tipos de cartão de aula: `C` conceito, `T` macete, `K` comparação, `V` verdadeiro ou falso e `W` laboratório de escrita (texto salvo no aparelho, com checklist).

Formato de cada fase:

```js
{
  id: 'sus-1', ico: '📜', title: 'Título da fase', topic: 'Assunto do edital',
  cargo: 'acs',            // opcional: só aparece para esse cargo
  lesson: [ C(...), T(...), K(...), V(...) ],  // conceito, macete, comparação, verdadeiro/falso
  quiz:   [ Q('Enunciado', ['certa', 'errada', 'errada', 'errada'], 0, 'Explicação') ]
}
```

Nas questões, a alternativa correta pode ficar em qualquer posição (o índice indica qual é). O app embaralha as alternativas a cada tentativa.

Temas de ilustração da trilha (`theme` da unidade): `sus`, `campo`, `letras`, `saquarema`, `matematica`, `natureza`, `humanas` e `redacao`. Para criar outro tema, adicione desenhos em `DECOR` e uma lista em `THEMES` no `map.js`.

## Planos premium

Os planos ficam em `PLANS`, no `app.js`. O botão "Comprar" ainda não cobra nada: mostra um aviso de "pagamento em breve". Quando houver link de pagamento (Mercado Pago, Stripe, Hotmart etc.), coloque o link no campo `checkout` do plano e o botão passa a abrir o pagamento.

## Mascote (robô Aprovaê+)

Cada pose é um arquivo próprio em `assets/mascote/`: `robo-principal`, `robo-joinha`, `robo-estudando`, `robo-notebook`, `robo-sus`, `robo-saquarema`, `robo-legislacao`, `robo-graduacao`, `robo-campo`, `robo-conquista`, `robo-duvida`, `robo-atencao`, `robo-revisao`, `robo-planejamento` e `robo-comemoracao`.

- Para usar uma pose numa tela: `mascot(alturaEmPx, 'nome-da-pose')`, em `app.js`.
- Para escolher a pose de uma unidade: campo `mascot: 'sus'` na unidade, no arquivo de conteúdo.
- Para criar uma pose nova: salve `robo-NOME.webp` e `robo-NOME.png` na pasta e registre o tamanho em `ROBO`, em `app.js`.

## Prévia no WhatsApp

As tags `og:*` do `index.html` usam `assets/img/og-aprovae-selo.jpg` (800×800, selo redondo do mascote), com o endereço completo `https://aprovae-alpha.vercel.app/...`. Se o domínio mudar, troque esse endereço nas tags `og:url`, `og:image`, `og:image:secure_url` e `twitter:image`.

O WhatsApp guarda a prévia em cache. Se ela não atualizar, compartilhe o link com um final diferente, por exemplo `?v=2`.

## Atualizações e cache

O `vercel.json` manda o navegador sempre conferir se há versão nova. No `index.html`, os arquivos levam `?v=DATA`: ao publicar mudanças em CSS, JS ou ícones, atualize esse número para forçar o download.

## Conteúdo e direitos autorais

Todas as lições, questões e flashcards foram **escritos especialmente para o Aprovaê**. Nenhuma questão foi copiada de provas ou de bancos de questões. Os trechos de lei citados (Constituição, Leis 8.080/90, 8.142/90, 11.350/06 e outras) são de domínio público.

Antes de divulgar amplamente, revise o conteúdo com um especialista. Confira também a unidade de Saquarema no documento indicado pelo IBAM no edital.

## Progresso do aluno

O progresso fica salvo no navegador de cada pessoa (`localStorage`). Para sincronizar entre aparelhos, o próximo passo é adicionar login e banco de dados.

## Próximos passos para virar app

- Adicionar um service worker para funcionar offline e permitir instalação completa (PWA)
- Empacotar com Capacitor para gerar os apps de Android e iOS
