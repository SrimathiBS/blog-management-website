import React , {useState} from 'react'

import Thumbnail from '../image/me.jpeg'
import PostItem from './PostItem'
const DUMMY_POSTS = [
  {
    id: '1',
    thumbnail: Thumbnail,
    category: 'education',
    title: 'this is the title of the very first post on this blog.',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia officiis id perspiciatis architecto quibusdam aperiam possimus consectetur. Minus ipsa sapiente repellat harum atque, provident, magnam explicabo quas ullam optio animi.',
    authorID: 3
  },
  {
  
    id: '2',
    thumbnail: Thumbnail,
    category: 'science',
    title: 'this is the title of the very second post on this blog.',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia officiis id perspiciatis architecto quibusdam aperiam possimus consectetur. Minus ipsa sapiente repellat harum atque, provident, magnam explicabo quas ullam optio animi.',
    authorID: 1
  
  },
  {
    
    id: '3',
    thumbnail: Thumbnail,
    category: 'weather',
    title: 'this is the title of the very third post on this blog.',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia officiis id perspiciatis architecto quibusdam aperiam possimus consectetur. Minus ipsa sapiente repellat harum atque, provident, magnam explicabo quas ullam optio animi.',
    authorID: 13
  
  },
  {
    id: '4',
    thumbnail: Thumbnail,
    category: 'farming',
    title: 'this is the title of the very last post on this blog.',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia officiis id perspiciatis architecto quibusdam aperiam possimus consectetur. Minus ipsa sapiente repellat harum atque, provident, magnam explicabo quas ullam optio animi.',
    authorID: 11
  }

]

const Posts = () => {
      const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
    <section className="posts">
      {
          posts.map(() => <PostItem />)
      }
    </section>
  )
}

export default Posts