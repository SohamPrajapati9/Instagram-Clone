import { pfps } from './pfps.js'
import nidhiPost from './InitPosts/nidhiPost.jpeg'
import nishPost from './InitPosts/nishPost.jpeg'
import prerakPost from './InitPosts/prerakPost.jpeg'

export const Posts = [
  {
    id: 1,
    userName: 'nidhiii',
    pfp: pfps.nidhi,
    postPhoto: nidhiPost,
    caption: 'Diva by the river ✨',
    timeAgo: '5 hours ago',
    likes: 12,
    comments: 4,
    commentList: [
      { by: 'me', text: 'Beautiful!', pfp: pfps.me },
      { by: 'prerakgada', text: 'Stunning!', pfp: pfps.prerak },
      { by: 'nish', text: 'Wow, love this!', pfp: pfps.nish },
      { by: 'janvii♡', text: 'Gorgeous!', pfp: pfps.janvi },
    ],
  },
  {
    id: 2,
    userName: 'nish',
    pfp: pfps.nish,
    postPhoto: nishPost,
    caption: 'starlight!? 💫',
    timeAgo: '8 hours ago',
    likes: 45,
    comments: 3,
    commentList: [
      { by: 'me', text: 'The place!!', pfp: pfps.me },
      { by: 'nidhiii', text: 'Amazing shot!', pfp: pfps.nidhi },
      { by: 'janvii♡', text: 'Love the vibe!', pfp: pfps.janvi },
    ],
  },
  {
    id: 3,
    userName: 'janvii♡',
    pfp: pfps.janvi,
    postPhoto: pfps.janvi,
    caption: 'Life lately ✨',
    timeAgo: '2 days ago',
    likes: 30,
    comments: 5,
    commentList: [
      { by: 'me', text: 'So aesthetic!', pfp: pfps.me },
      { by: 'nidhiii', text: 'So pretty!', pfp: pfps.nidhi },
      { by: 'nish', text: 'Love this!', pfp: pfps.nish },
      { by: 'prerakgada', text: 'Gorgeous!', pfp: pfps.prerak },
      { by: 'acoustic_kid', text: 'Beautiful!', pfp: pfps.het },
    ],
  },
  {
    id: 4,
    userName: 'prerakgada',
    pfp: pfps.prerak,
    postPhoto: prerakPost,
    caption: 'Pikachu! ⚡️',
    timeAgo: '1 day ago',
    likes: 20,
    comments: 2,
    commentList: [
      { by: 'me', text: 'Cute!', pfp: pfps.me },
      { by: 'acoustic_kid', text: 'Pika pika!', pfp: pfps.het },
    ],
  },
]