import avatar from './avatar.png'
import icon1 from './icon1.png'
import icon2 from './icon2.png'
import icon3 from './icon3.png'
import card_img1 from './card_img1.png'
import card_img2 from './card_img2.png'
import card_img3 from './card_img3.png'
import expierence_img from './expierence.png'
export const homeData = {
  h1: 'Join the Game',
  p: `I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.`,
  button: 'Explore'
}
export const featuredData = {
  h1: 'Featured',
  card_h1: 'Martian Quest',
  card_p: `I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.`,
  button: 'Play now',
  video_url: 'https://video.wixstatic.com/video/ea26fd_8ed7dc63397c45969e1d658cb28c5a7b/480p/mp4/file.mp4'
}
export const awardData = {
  h1: 'Martian Quest Wins Mobile Game Awards',
  p: `I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.`,
  img_url: avatar
}

export const gamesData = {
  h1: 'More Games',
  cards: [
    {
      img: icon1,
      bg_img: card_img1,
      card_h1: 'The Unknown',
      card_type: 'Adventure',
      card_p: "I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.",
      button: 'Play now',
      delay: 0.4
    },
    {
      img: icon2,
      bg_img: card_img2,
      card_h1: 'Dragons Lair',
      card_type: 'RPG',
      card_p: "I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.",
      button: 'Play now',
      delay: 0.8
    },
    {
      img: icon3,
      bg_img: card_img3,
      card_h1: 'Atactic',
      card_type: 'Strategy',
      card_p: "I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.",
      button: 'Play now',
      delay: 1.2
    },
  ]
}
export const aboutData = {
  h1: 'About us',
  p: `I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.`,
  button: 'Learn more'
}

export const experienceData = {
  h1: 'A Perfect Gaming Experience',
  p: `I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.`,
  button: 'Explore',
  img: expierence_img
}
export const workWithUs = {
  h1: 'Work with us',
  p: `I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.`,
  button: 'Open Positions',
}

export const subscribe = {
  h1: 'Subscribe',
  p: `Be the first to know about new games, exclusive previews & special promotions`,
}
export const footer = {
  h1: 'Gigaplay',
  p: `I'm a paragraph. Click here to add your own text
  and edit me. I’m a great place for you to tell a story
  and let your users know a little more about you.`,
  contact: {
    h1: 'Contact',
    others: [
      '500 Terry Francois Street',
      'San Francisco, CA 94158',
      "info@mysite.com",
      'Tel: 123-456-7890'
    ]
  },
  quickMenu: {
    h1: 'Quick Menu',
    others: [
      'Games', 'Company', 'Careers', 'Contact'
    ]
  },
  socials: {
    h1: 'Socials',
    others: [
      'Facebook', 'Instagram', 'Twitter', 'Youtube'
    ]
  },
}

export const navbar = {
  logo: 'Gigaplay',
  links: [
    {
      url: '#home',
      text: 'Home'
    },
    {
      url: '#games',
      text: 'Games'
    },
    {
      url: '#company',
      text: 'Company'
    },
    {
      url: '#careers',
      text: 'Careers'
    },
    {
      url: '#contact',
      text: 'Contact'
    },
  ]
}