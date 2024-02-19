"use client";
export const navbar_links = [
    { link: '/home', label_en: 'Home', label_fr:'Accueil', label_kiny:'Ahabanza' },
    {
      link: '#1',
      label_en: 'Bible Study',
      label_fr: 'étude Biblique',
      label_kiny: 'Kwiga Bibiliya',
      links: [
        { link: '/verses', label_en: 'Verses',label_fr: 'Versets', label_kiny:'Imirongo' },
        { link: '/lessons', label_en: 'Lessons',label_fr: 'Cours', label_kiny:'Amasomo' },
        { link: '/questions', label_en: 'Questions',label_fr: 'Question', label_kiny:'Ibibazo' },
        { link: '/notes', label_en: 'Notes',label_fr: 'Remarques', label_kiny:'Resume' },
        { link: '/games', label_en: 'Bible Games',label_fr: 'Jeux Biblique', label_kiny:'Imikino ya Bibiliya' },
      ],
    }, 
    { link: '/testimony', label_en: 'Testimony',label_fr: 'Témoignage', label_kiny:'Ubuhamya' },
    { link: '/kids', label_en: 'Kids Content',label_fr: 'Contenu pour enfants', label_kiny:'Inyigisho z\' Abana' },
    { link: '/topics', label_en: 'Topics & Answers',label_fr: 'Sujets et réponses', label_kiny:'Intego & Ibisubizo' },
    {
      link: '#2',
      label_en: 'Books',
      label_fr: 'Livre',
      label_kiny: 'Ibitabo',
      links: [
        { link: '/book', label_en: 'Biblical Books',label_fr: 'Livre Biblique', label_kiny:'Ibitabo bya Bibiliya'  },
        { link: '/boo', label_en: 'Kids Books',label_fr: 'Livre de Enfant', label_kiny:'Ibitabo by\' Abana' },
      ],
    },
    { link: '/blog', label_en: 'Blog',label_fr: 'bloguer', label_kiny:'Amakuru' },
    { link: '/video', label_en: 'Video',label_fr: 'Video', label_kiny:'Videwo' },
    // { link: '/dashboard', label_en: 'Dashboard',label_fr: 'Tableau de bord', label_kiny:'Dashboard' },
  ];



  export const navbar_lang_labels = [
    {label_en: 'Blog',label_fr: 'bloguer', label_kiny:'Amakuru'}
  ];