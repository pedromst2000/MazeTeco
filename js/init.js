init();

/**
 * @description Initialize the application
 * @function init
 * @returns {void}
 */

function init() {
	// Users
	if (!localStorage.users) {
		const users = [
			{
				id: 1,
				username: "admin",
				password: "123admin",
				email: "admin@hotmail.com",
				genrer: "male",
				birthdate: "1994-05-13",
				location: "Vila Nova de Gaia",
				selected_avatar: "..src/assets/images/avatars/avatar01.jpg",
				selected_banner: "..src/assets/images/Banner.png",
				avatars: [
					{
						id: 1,
						nameAlt: "default_avatar",
						isSelected: false,
						src: "..src/assets/images/avatars/default_male.png",
					},
					{
						id: 2,
						nameAlt: "avatar01",
						isSelected: true,
						src: "..src/assets/images/avatars/avatar01.jpg",
					},
					{
						id: 3,
						nameAlt: "avatar02",
						isSelected: false,
						src: "..src/assets/images/avatars/avatar02.jpg",
					},
					{
						id: 4,
						nameAlt: "avatar04",
						isSelected: false,
						src: "..src/assets/images/avatars/avatar04.jpg",
					},
				],
				points: 500,
				lives: 15,
				boost: 1,
				level: 1,
				role: "admin",
				isBlocked: false,
				member_since: "2024-08-13T16:23:19Z",
			},
			{
				id: 2,
				username: "pedromst",
				password: "123pedro",
				email: "pedromst@hotmail.com",
				genrer: "male",
				birthdate: "2000-11-05",
				location: "Vila do Conde",
				selected_avatar: "..src/assets/images/avatars/avatar05.jpg",
				selected_banner: "..src/assets/images/Banner.png",
				avatars: [
					{
						id: 1,
						nameAlt: "default_avatar",
						isSelected: false,
						src: "..src/assets/images/avatars/default_male.png",
					},
					{
						id: 2,
						nameAlt: "avatar05",
						isSelected: true,
						src: "..src/assets/images/avatars/avatar05.jpg",
					},
					{
						id: 3,
						nameAlt: "avatar06",
						isSelected: false,
						src: "..src/assets/images/avatars/avatar06.jpg",
					},
				],
				points: 50,
				lives: 5,
				boost: 1,
				level: 1,
				role: "regular",
				isBlocked: false,
				member_since: "2024-08-16T23:00:00Z",
			},
		];

		localStorage.setItem("users", JSON.stringify(users));
	}

	// Tags

	if (!localStorage.tags) {
		const tags = [
			{
				id: 1,
				tag: "UI|UX",
			},
			{
				id: 2,
				tag: "Full-Stack",
			},
			{
				id: 3,
				tag: "Front-End",
			},
			{
				id: 4,
				tag: "Back-End",
			},
			{
				id: 5,
				tag: "Mobile",
			},
			{
				id: 6,
				tag: "Marketing Digital",
			},
			{
				id: 7,
				tag: "Jogos Digitais",
			},
			{
				id: 8,
				tag: "Outro",
			},
		];

		localStorage.setItem("tags", JSON.stringify(tags));
	}

	// Categories

	if (!localStorage.categories) {
		const categories = [
			{
				id: 1,
				category: "All",
			},
			{
				id: 2,
				category: "Poster",
			},
			{
				id: 3,
				category: "Teaser",
			},
			{
				id: 4,
				category: "Testemunhos Alumni",
			},
		];

		localStorage.setItem("categories", JSON.stringify(categories));
	}

	// Alumnis

	if (!localStorage.alumnis) {
		const alumnis = [
			{
				id: 1,
				photo:
					"https://res.cloudinary.com/dvthg2763/image/upload/v1723655120/MazeTeco/dev/Alumni/photo-1678737276261-e9cfbeb9c999_1_mdxxt5.jpg",
				name: "Inês Reis",
				yearGrad: 2023,
				occupation: "UI Designer",
				testimony:
					" digo, de coração cheio, que os três anos na licenciatura foram transformadores",
				description:
					'Inês Reis, alumnus da Licenciatura em Tecnologias e Sistemas de Informação para a Web, frequenta atualmente, o Mestrado em Sistemas e Media Interativos da ESMAD. Citando a Inês "digo, de coração cheio, que os três anos na licenciatura foram transformadores". Inicialmente sem rumo, descobriu a sua paixão: o Design da Experiência do Utilizador e de Interfaces. "A licenciatura, elogiada por muitos conhecidos pelas suas competências abrangentes, proporcionou-me não apenas formação profissional, mas também experiências académicas que nunca vou esquecer". Inês fez o seu estágio na Kendir Studios, onde desempenhou o papel de Gestora de Projetos e UX Designer. Da altura do estágio, destaca a criação do recurso educativo digital Fibonacci e o Número de Ouro, premiado pela Direção-Geral de Educação. Realça, igualmente, as pilotagens em escolas de diversos concelhos, desde Vila Nova de Gaia a Sintra, para o Recurso Educativo Digital de "Sustentabilidade", onde teve a oportunidade de estudar várias turmas de diferentes anos, desde o 7.º ao 9.º ano. Finalizou o estágio com o que, segundo a própria, foi a sua maior conquista até aos dias de hoje: pela primeira vez, na história do curso, obteve 20 valores no estágio. Inês Reis integrará a equipa da MOG Technologies, como Gestora de Projetos de Inovação, o que dará seguimento ao seu percurso profissional.',
				tag_id: 2,
				category_id: 4,
			},
			{
				id: 2,
				photo:
					"https://res.cloudinary.com/dvthg2763/image/upload/v1723655163/MazeTeco/dev/Alumni/premium_photo-1672239496290-5061cfee7ebb_xv4wm0.jpg",
				name: "Nuno Costa",
				yearGrad: 2021,
				occupation: "Software Developer",
				testimony:
					"Ingressar em TSIW preparou-me para os desafios do mundo profissional.",
				description:
					"Nuno Costa, alumnus da Licenciatura em Tecnologias e Sistemas de Informação para a Web, trabalha atualmente como Assistente Convidado na Escola Superior de Media Artes e Design e como Software Developer na MOG Technologies. Durante a frequência do curso, em conjunto com dois colegas, conquistou o 1.º lugar no concurso internacional de programação I Juezlti Contest of EU Code Week. A jornada do Nuno na MOG teve início num evento organizado pela ESMAD, o Plug-in, que tem como objetivo promover uma ligação mais estreita entre os estudantes e as empresas. Durante o seu estágio na empresa, desenvolveu um projeto no ramo da educação, colaborando com parceiros de diferentes países europeus. Após a conclusão do estágio, Nuno foi convidado a integrar uma equipa de desenvolvimento da empresa onde estagiou. “Ingressar em TSIW preparou-me para os desafios do mundo profissional. Os diferentes projetos de grupo e o foco nas tecnologias mais recentes proporcionaram-me uma base sólida de conhecimentos e habilidades práticas, como o trabalho de equipa e resolução de problemas.” Como Assistente Convidado, compartilha o seu conhecimento na mesma instituição onde se formou, contribuindo para a formação de futuros profissionais na área.",
				tag_id: 3,
				category_id: 4,
			},
			{
				id: 3,
				photo:
					"https://res.cloudinary.com/dvthg2763/image/upload/v1723655411/MazeTeco/dev/Alumni/photo-1499887142886-791eca5918cd_mtuvgz.jpg",
				name: "Raquel Silva",
				yearGrad: 2021,
				occupation: "Game Developer",
				testimony:
					"a passagem pela ESMAD e pela Licenciatura em Tecnologias e Sistemas de Informação para a Web proporcionou-me o ingresso no mercado de trabalho e neste mundo do desenvolvimento dos jogos educativos, na qual realizo atualmente a minha vida profissional",
				description:
					'Raquel Silva é alumna da Licenciatura em Tecnologias e Sistemas de Informação para a Web. Atualmente, trabalha como Game Development & Implementation na Kendir Studios. A sua relação com a empresa, onde atualmente desempenha funções, surgiu em contexto de estágio curricular. Raquel conheceu a Kendir através do evento anual Plug-in, promovido pela ESMAD, e que promove uma ligação entre entidades e empresas. "Foi nesse evento que conheci a Kendir Studios e o projeto proposto, que passava pelo desenvolvimento de jogos educativos que promovessem a aprendizagem da matemática e das ciências". Quando ingressou na Kendir, surgiu o projeto Liber Domus, um jogo educativo com aventuras, ao estilo RPG (Role Playing Game), em que o jogador se diverte melhorando a sua personagem, interagindo com pessoas e ambientes, conquistando objetivos e recompensas. As aventuras permitem manter o jogador focado na história e consequentemente, na aprendizagem. Com este jogo educativo procurou-se promover um estudo mais divertido e interativo, motivando o estudante a envolver-se mais no seu processo de aprendizagem e aumentando o seu interesse em saber mais. Sendo um projeto com origem na academia, o primeiro prémio - Born For Knowledge Ideas -, galardoou o conceito e o seu potencial de mercado. Procurando criar jogos educativos com impacto, os vários projetos desenvolvidos foram já premiados como finalistas do DigiEduHack 2021 e do Resilience Games 2022. A equipa e o seu modus operandi foi ainda acreditada pela ANI, como inovadora no ramo das indústrias criativas, sendo agora finalista do Born for Knowledge Rise 2022. Segundo Raquel, "a passagem pela ESMAD e pela Licenciatura em Tecnologias e Sistemas de Informação para a Web proporcionou-me o ingresso no mercado de trabalho e neste mundo do desenvolvimento dos jogos educativos, na qual realizo atualmente a minha vida profissional".',
				tag_id: 8,
				category_id: 4,
			},
		];

		localStorage.setItem("alumnis", JSON.stringify(alumnis));
	}
	// Posters
	if (!localStorage.posters) {
		const posters = [
			{
				id: 1,
				photo:
					"https://res.cloudinary.com/dvthg2763/image/upload/v1723734394/MazeTeco/dev/Posters/Diogo_Borges_z3v0px.jpg",
				download_name: "Diogo_Borges_z3v0px.jpg",
				company: "Celfocus",
				year: 2023,
				theme: "Dynamic Report Generator",
				description:
					"Este poster apresenta o projeto Dynamic Report Generator, desenvolvido por Diogo Teixeira durante o seu estágio curricular na Celfocus. O projeto foca-se na criação de uma ferramenta poderosa e flexível para a geração dinâmica de relatórios, adaptável a diversas necessidades empresariais. Utilizando tecnologias modernas como NodeJS, VueJS e Express, Diogo desenvolveu uma aplicação que permite aos utilizadores criar e personalizar relatórios em tempo real. Com uma interface intuitiva e funcionalidades robustas, o Dynamic Report Generator automatiza processos complexos de geração de relatórios, oferecendo soluções eficientes e personalizadas para a análise de dados.",
				tag_id: 2,
				category_id: 2,
			},
			{
				id: 2,
				photo:
					"https://res.cloudinary.com/dvthg2763/image/upload/v1723733233/MazeTeco/dev/Posters/Alexandre_Bessa_tniooe.png",
				download_name: "Alexandre_Bessa_tniooe.png",
				company: "Strongstep",
				year: 2023,
				theme: "Gestão de Riscos",
				description:
					"Este poster apresenta o trabalho desenvolvido por Alexandre Bessa durante o estágio curricular na Strongstep no ano letivo de 2022/2023, focado na reformulação da funcionalidade de Gestão de Riscos. Utilizando ferramentas como Figma para design, VSCode para desenvolvimento e Ruby on Rails para implementação, Alexandre criou uma solução eficiente para identificar, avaliar e mitigar riscos em projetos. O sistema inclui uma Lista de Riscos, onde são compiladas potenciais ameaças, uma Matriz de Risco que prioriza os riscos com base na probabilidade e impacto, e Estatísticas que apresentam gráficos de barras para uma visualização clara dos riscos. O projeto também integra Ações de Mitigação, Parâmetros Customizáveis para adaptar o sistema às necessidades específicas e um Histórico para acompanhar a evolução dos riscos ao longo do tempo. Com um design Responsivo, a ferramenta assegura acessibilidade e funcionalidade em diferentes dispositivos, exemplificando uma abordagem moderna e eficaz à gestão de riscos, crucial para o sucesso dos projetos.",
				tag_id: 2,
				category_id: 2,
			},
			{
				id: 3,
				photo:
					"https://res.cloudinary.com/dvthg2763/image/upload/v1723731235/MazeTeco/dev/Posters/40210465_PedroTeixeira_so69se.jpg",
				download_name: "40210465_PedroTeixeira_so69se.jpg",
				company: "ESMAD",
				year: 2024,
				theme: "Aplicação Móvel",
				description:
					'Este poster apresenta o projeto final desenvolvido por Pedro Teixeira no ano letivo de 2023/2024, na ESMAD, com o tema "Aplicação Móvel de Avaliação do Risco Cardiovascular". A aplicação tem como objetivo ajudar os utilizadores a monitorizar e melhorar a sua saúde cardiovascular através de várias funcionalidades. Entre elas, destaca-se a Literacia em Saúde, que oferece informações sobre higiene do sono, gestão do stress e combate ao sedentarismo, seguindo as orientações da OMS. A aplicação também inclui um Dashboard interativo que apresenta dados estatísticos detalhados sobre a evolução do risco cardiovascular e o progresso das atividades físicas do utilizador. Além disso, promove a Atividade Física com desafios e exercícios variados, como yoga, maratonas e musculação, acompanhados por um rastreamento preciso das atividades. Para complementar, há uma secção dedicada à Alimentação e Nutrição, que sugere dietas saudáveis como a Vegan, DASH e Mediterrânea, com receitas de sopas, pratos principais, saladas e sobremesas. O projeto foi desenvolvido utilizando ferramentas como Figma, VSCode, Typescript, React Native, Sequelize e ExpressJs, resultando numa aplicação robusta e intuitiva para a promoção de hábitos saudáveis e a redução do risco cardiovascular.',
				tag_id: 5,
				category_id: 2,
			},
		];

		localStorage.setItem("posters", JSON.stringify(posters));
	}

	// Teasers
	if (!localStorage.teasers) {
		const teasers = [
			{
				id: 1,
				videosrc:
					"https://res.cloudinary.com/dvthg2763/video/upload/v1723737515/MazeTeco/dev/Teasers/videoPromo_CustoJusto_woikax.mp4",
				embeddedSrc: null,
				title: "Prototipagem de Interfaces",
				company: "CustoJusto",
				year: 2024,
				description:
					"Prepare-se para uma revolução digital! Neste estágio na CustoJusto, Bernardo Ferreira mergulhou na Prototipagem de Interfaces e na Inovação da Dashboard da plataforma. Utilizando ferramentas de ponta como NextJS e Figma, Bernardo desenvolveu soluções inovadoras que elevam a experiência do utilizador a um novo nível. O projeto não só envolveu a criação de protótipos de interfaces que combinam estética e funcionalidade, mas também a implementação de um sistema de suporte ao cliente mais eficiente e a introdução de banners personalizados que potencializam a interação e conversão na plataforma.",
				tag_id: 3,
				category_id: 3,
			},
			{
				id: 2,
				videosrc:
					"https://res.cloudinary.com/dvthg2763/video/upload/v1723738735/MazeTeco/dev/Teasers/TSIW_2023_InesReis_sxyvgg.mp4",
				embeddedSrc: null,
				title:
					"Desenho de Recursos Educativos Digitais e experiência do aluno no uso de Jogos Educativos",
				company: "Kendir Studios",
				year: 2023,
				description:
					"Este teaser apresenta o projeto de Ines Reis, realizado em 2022/2023 na Kendir Studios, que foca na criação de Recursos Educativos Digitais (RED) e na experiência dos alunos com Jogos Educativos. Em parceria com a Direção-Geral de Educação (DGE), foram desenvolvidos módulos interativos para salas de aula, com interfaces e ambientes 3D inovadores, visando promover a aprendizagem autónoma. O estágio centrou-se na implementação, avaliação e melhoria contínua desses recursos, garantindo sua eficácia e acessibilidade.",
				tag_id: 1,
				category_id: 3,
			},
			{
				id: 3,
				videosrc:
					"https://res.cloudinary.com/dvthg2763/video/upload/v1723738870/MazeTeco/dev/Teasers/40210465_PedroTeixeira_rbtimj.mp4",
				embeddedSrc: null,
				title: "Aplicação móvel para avaliação do risco cardiovascular",
				company: "ESMAD",
				year: 2024,
				description:
					"Este teaser apresenta o projeto final de Pedro Teixeira, realizado em 2023/2024 na ESMAD. O projeto consiste numa aplicação móvel inovadora para a Avaliação do Risco Cardiovascular. Esta ferramenta combina literacia em saúde, com foco em hábitos como higiene do sono e gestão do stress, com um dashboard interativo que oferece uma análise detalhada do risco cardiovascular e do progresso da atividade física. A aplicação também inclui desafios de atividade física e orientações nutricionais, com receitas e dietas saudáveis, como Vegan, DASH e Mediterrânea. Desenvolvido com tecnologias como React Native, TypeScript e ExpressJS, este projeto visa proporcionar aos utilizadores uma abordagem holística e acessível para melhorar a saúde cardiovascular.",
				tag_id: 5,
				category_id: 3,
			},
			{
				id: 4,
				videosrc:
					"https://res.cloudinary.com/dvthg2763/video/upload/v1723741765/MazeTeco/dev/Teasers/40210313_BeatrizRodrigues_togoie.mp4",
				embeddedSrc: null,
				title: "Interface e Interação",
				company: "Kendir Studios",
				year: 2024,
				description:
					'Este teaser apresenta o projeto de estágio de Beatriz Rodrigues, realizado em 2023/2024 na Kendir Studios. Focado em "Interface e Interação", o projeto envolve o design e desenvolvimento de animações UI para jogos educativos, bem como animações de ambiente e a criação de elementos de interface (UI). Este trabalho é fundamental para melhorar a experiência do utilizador, tornando-a mais envolvente e intuitiva, especialmente no contexto de jogos voltados para a educação. Beatriz combinou criatividade com técnicas avançadas de design para elevar a interação e a estética visual dos produtos da Kendir Studios.',
				tag_id: 1,
				category_id: 3,
			},
			{
				id: 5,
				videosrc:
					"https://res.cloudinary.com/dvthg2763/video/upload/v1723741924/MazeTeco/dev/Teasers/TSIW_2023_AlexandreMagalhaes_jpahyg.mp4",
				embeddedSrc: null,
				title: "Human Capital Management",
				company: "Frejen Wise Solutions",
				year: 2023,
				description:
					'Este teaser destaca o projeto de Alexandre Magalhães, realizado em 2022/2023 na Frejen Wise Solutions, focado no desenvolvimento de uma aplicação web de backoffice para gestão de Recursos Humanos. Intitulado "Human Capital Management", o projeto consiste no desenvolvimento de um SaaS que auxilia empresas a controlarem de forma eficiente todos os processos relacionados ao capital humano. A aplicação serve como uma ferramenta essencial para a administração e otimização de operações de RH, permitindo que as empresas gerenciem com precisão o seu recurso mais valioso: as pessoas.',
				tag_id: 4,
				category_id: 3,
			},
		];

		localStorage.setItem("teasers", JSON.stringify(teasers));
	}

	// Events
	if (!localStorage.events) {
		const events = [
			{
				id: 1,
				photo:
					"https://res.cloudinary.com/dvthg2763/image/upload/v1723734973/MazeTeco/dev/Eventos/Gamifyit_ekypwo.png",
				title: "GamifyIt",
				logo: "..src/assets/svg/logos_events/GamifyItLogo.png",
				link: "https://eventos.esmad.ipp.pt/gamifyit/",
				description:
					"O Gamifyit é o palco onde a criatividade e a inovação dos nossos alunos brilham. Este evento anual é dedicado a premiar as melhores aplicações desenvolvidas pelos estudantes do 2º e 3º ano da licenciatura TSIW.Com duas categorias distintas, aplicações web para o 2º ano e aplicações mobile ou nativas para o 3º ano, os projetos são inseridos em projetos interdisciplinares, WebPII para o 2º ano e ESMAPP para o 3º ano. Avaliados por um júri especializado, que premia a excelência em gamificação e conceito inovador, os alunos têm a oportunidade perfeita para mostrar o seu talento, competir por reconhecimento e explorar o potencial ilimitado das tecnologias web e mobile.",
			},
			{
				id: 2,
				photo:
					"https://res.cloudinary.com/dvthg2763/image/upload/v1723734974/MazeTeco/dev/Eventos/Plug-in_rcrury.png",
				title: "Plug-in",
				logo: "..src/assets/svg/logos_events/Plug-InLogo.png",
				link: "https://eventos.esmad.ipp.pt/plug-in/",
				description:
					"O Plug-In é mais do que um simples evento,é uma ponte entre o mundo académico e o mercado de trabalho. Organizado anualmente pela ESMAD, este encontro reúne estudantes, professores e potenciais parceiros empresariais para criar sinergias e fomentar oportunidades de estágio curricular.  Com o objetivo de promover o desenvolvimento de projetos em contexto real e facilitar a integração dos nossos finalistas no mercado de trabalho, o Plug-In é o local ideal para descobrir novos talentos e estabelecer parcerias estratégicas.",
			},
			{
				id: 3,
				photo:
					"https://res.cloudinary.com/dvthg2763/image/upload/v1723734973/MazeTeco/dev/Eventos/MadJs_usulxy.png",
				title: "MadJs",
				logo: "..src/assets/svg/logos_events/madJSLogo.png",
				link: "https://eventos.esmad.ipp.pt/madjs/",
				description:
					'O Madjs é uma competição eletrizante que desafia os programadores mais talentosos da comunidade TSIW. Durante uma hora intensa, os participantes enfrentam seis desafios de programação em JavaScript, utilizando o ambiente de desenvolvimento CodeTest. Este evento não só testa as habilidades técnicas e o pensamento lógico dos concorrentes, mas também promove a camaradagem e o espírito competitivo saudável. Organizado pelo Departamento de Informática da ESMAD e associado ao projeto Erasmus+ "JuezLTI", o Madjs oferece certificados de participação a todos os concorrentes e prémios fantásticos para os melhores desempenhos. Prepare-se para provar o seu valor e conquistar o pódio',
			},
			{
				id: 4,
				photo:
					"https://res.cloudinary.com/dvthg2763/image/upload/v1723734975/MazeTeco/dev/Eventos/Rave_pwy88x.png",
				title: "Rave",
				logo: null,
				link: "https://www.esmad.ipp.pt/noticias/rave-2024",
				description:
					"A RAVE é uma celebração da criatividade e da inovação, apresentando os projetos dos alunos finalistas da ESMAD. Neste evento, os visitantes têm a oportunidade de explorar trabalhos autorais nas áreas de design, multimédia, fotografia, cinema e tecnologias web. É um espaço onde a visão artística e o conhecimento técnico se encontram, proporcionando uma plataforma para os estudantes exibirem as suas criações e conectarem-se com o público e profissionais da área. Aberto à comunidade, a RAVE oferece uma experiência imersiva, mostrando o talento e a dedicação dos nossos futuros profissionais. Venha inspirar-se e descobrir o futuro das artes e tecnologias!",
			},
			{
				id: 5,
				photo:
					"https://res.cloudinary.com/dvthg2763/image/upload/v1723734972/MazeTeco/dev/Eventos/Endpoints_cweaae.png",
				title: "Endpoints",
				logo: null,
				link: "https://www.esmad.ipp.pt/noticias/tsiw-endpoints-2",
				description:
					"O Endpoints é um evento exclusivo que reúne quatro alumni de TSIW para partilharem as suas jornadas profissionais com os atuais alunos. Estas sessões são ricas em insights e inspiradoras, oferecendo uma visão realista e motivadora das possibilidades que aguardam os graduados de TSIW. Os convidados discutem os desafios que enfrentaram, as conquistas que alcançaram e os passos que deram para alcançar o sucesso nas suas carreiras. É uma oportunidade inestimável para os alunos aprenderem com as experiências de quem já trilhou o caminho, fornecendo orientações valiosas e inspiração para o seu próprio futuro. Junte-se a nós e deixe-se inspirar por estas histórias de sucesso!",
			},
		];

		localStorage.setItem("events", JSON.stringify(events));
	}
}
