import { useState, useEffect } from 'react'
import {logos} from './assets/logos.js'
import {pfps} from './assets/pfps.js'
import { Posts } from './assets/posts.js'
import { Stories } from './assets/stories.js'

function App() {
  const getPfpFor = (userName) => {
    const usernameToPfp = {
      'me': pfps.me,
      'nidhiii': pfps.nidhi,
      'nish': pfps.nish,
      'prerakgada': pfps.prerak,
      'janvii♡': pfps.janvi,
      'acoustic_kid': pfps.het,
      'body.bullying': pfps.siddh,
      'predator1000': pfps.rishi,
    }
    return usernameToPfp[userName] || pfps.me
  }
  const [accountDetails, setaccountDetails] = useState(() => {
    try {
      const saved = localStorage.getItem('accountDetails')
      if (saved) {
        const parsed = JSON.parse(saved)
        return (parsed || []).map((p) => ({
          ...p,
          commentList: (p.commentList || []).map((c) => ({ ...c, pfp: c.pfp || getPfpFor(c.by) })),
        }))
      }
    } catch (err) {
      console.error('Failed to read accountDetails from localStorage', err)
    }
    return Posts.map((p) => ({
      ...p,
      liked: false,
      commentList: (p.commentList || []).map((c) => ({ ...c, pfp: c.pfp || getPfpFor(c.by) })),
    }))
  })

  useEffect(() => {
    try {
      localStorage.setItem('accountDetails', JSON.stringify(accountDetails))
    } catch (err) {
      console.error('Failed to save accountDetails to localStorage', err)
    }
  }, [accountDetails])

  const [isCreatePostOpen, setisCreatePostOpen] = useState(false)
  const [newPostCaption, setnewPostCaption] = useState('')
  const [newPostPhotoUrl, setnewPostPhotoUrl] = useState('')
  const [commentDrafts, setcommentDrafts] = useState({})

  const [stories] = useState(() => {
    try {
      const saved = localStorage.getItem('stories')
      if (saved) return JSON.parse(saved)
    } catch (err) {
      console.error('Failed to read stories from localStorage', err)
    }
    return Stories
  })
  useEffect(() => {
    try {
      localStorage.setItem('stories', JSON.stringify(stories))
    } catch (err) {
      console.error('Failed to save stories to localStorage', err)
    }
  }, [stories])

  const [isStoryOpen, setisStoryOpen] = useState(false)
  const [activeStoryIndex, setactiveStoryIndex] = useState(0)

  const openStory = (idx) => {
    setactiveStoryIndex(idx)
    setisStoryOpen(true)
  }
  const closeStory = () => setisStoryOpen(false)
  const nextStory = () => setactiveStoryIndex((i) => (i + 1) % stories.length)
  const prevStory = () => setactiveStoryIndex((i) => (i - 1 + stories.length) % stories.length)

  const [isCommentsOpen, setisCommentsOpen] = useState(false)
  const [commentsPostId, setcommentsPostId] = useState(null)
  const openComments = (postId) => { setcommentsPostId(postId); setisCommentsOpen(true) }
  const closeComments = () => setisCommentsOpen(false)

  const onCreatePostFileChange = async (e) => {
    const selectedFile = e.target.files && e.target.files[0]
    if (!selectedFile) return
    const fileToBase64 = (file) => new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result)
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
    try {
      const base64 = await fileToBase64(selectedFile)
      setnewPostPhotoUrl(base64)
    } catch (err) {
      console.error('Failed to read file to base64', err)
    }
  }

  const onAddPost = () => {
    if (!newPostPhotoUrl) return
    const nextId = accountDetails.length === 0 ? 1 : accountDetails[accountDetails.length - 1].id + 1
    const newAccount = {
      id: nextId,
      userName: 'me',
      pfp: pfps.me,
      postPhoto: newPostPhotoUrl,
      caption: newPostCaption,
      timeAgo: 'Just now',
      likes: 0,
      comments: 0,
      commentList: [],
    }
    setaccountDetails([...accountDetails, newAccount])
    setisCreatePostOpen(false)
    setnewPostCaption('')
    setnewPostPhotoUrl('')
  }

  const toggleLike = (postId) => {
    setaccountDetails((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    )
  }

  const addCommentToPost = (postId) => {
    const text = (commentDrafts[postId] || '').trim()
    if (!text) return
    const updated = accountDetails.map((p) => {
      if (p.id !== postId) return p
      const existingList = Array.isArray(p.commentList) ? p.commentList : []
      const updatedList = [...existingList, { by: 'me', text, pfp: pfps.me }]
      const nextCommentsCount = (typeof p.comments === 'number' ? p.comments : existingList.length) + 1
      return {
        ...p,
        commentList: updatedList,
        comments: nextCommentsCount,
      }
    })
    setaccountDetails(updated)
    setcommentDrafts({ ...commentDrafts, [postId]: '' })
  }


  return (

    <div className='App'>

      <div className='SideBar'>
        <div className='LogoSection'>
          <div className='Logo'>
            <img src={logos.instalogo} alt="Instagram Logo" />
          </div>
        </div>
        <div className='MenuSelection'>
          <div className='MenuItem'>
            <img src={logos.home} className='MenuItemLogo' />
            <div className='MenuItemText'>Home</div>
          </div>
          <div className='MenuItem'>
            <img src={logos.explore} className='MenuItemLogo' />
            <div className='MenuItemText'>Explore</div>
          </div>
          <div className='MenuItem'>
            <img src={logos.reels} className='MenuItemLogo' />
            <div className='MenuItemText'>Reels</div>
          </div>
          <div className='MenuItem'>
            <img src={logos.messages} className='MenuItemLogo' />
            <div className='MenuItemText'>Messages</div>
          </div>
          <div className='MenuItem'>
            <img src={logos.notifications} className='MenuItemLogo' />
            <div className='MenuItemText'>Notifications</div>
          </div>
          <div className='MenuItem'>
            <img src={logos.create} className='MenuItemLogo' />
            <div className='MenuItemText'>Create</div>
          </div>
          <div className='MenuItem'>
            <img src={logos.dashboard} className='MenuItemLogo' />
            <div className='MenuItemText'>Dashboard</div>
          </div>
          <div className='MenuItem'>
            <img src={logos.my_pfp} className='MenuItemPfp' />
            <div className='MenuItemText'>Profile</div>
          </div>
        </div>

        <div className='MoreOptions'>
          <div className='MenuItem'>
            <img src={logos.metaAi} className='MenuItemLogo' />
            <div className='MenuItemText'>Meta AI</div>
          </div>
          <div className='MenuItem'>
            <img src={logos.aiStudio} className='MenuItemLogo' />
            <div className='MenuItemText'>AI Studio</div>
          </div>
          <div className='MenuItem'>
            <img src={logos.threads} className='MenuItemLogo' />
            <div className='MenuItemText'>Threads</div>
          </div>
          <div className='MenuItem'>
            <img src={logos.more} className='MenuItemLogo' />
            <div className='MenuItemText'>More</div>
          </div>
        </div>

      </div>

      <div className='MainContent'>

        <div className='Feed'>
          <div className='StorySection'>
            {stories.map((s, idx) => (
              <div className='Story' key={`story-${s.id}`} onClick={() => openStory(idx)}>
                <img src={s.pfp} className='StoryPfp' alt="Profile" />
                <div className='StoryUserName'>{s.userName}</div>
              </div>
            ))}

          </div>

          <div className='FeedSection'>
            {accountDetails.map((post) => (
              <div className='Post' key={`post-${post.id}`}>
                <div className='TopDetails'>
                  <div className='PostPfp'>
                    <img src={post.pfp} className='PostPfpImage' alt="Profile" />
                  </div>
                  <div className='PostDetails'>
                    <div className='PostUserName'>{post.userName}</div>
                    <div className='PostTime'>{post.timeAgo}</div>
                  </div>
                  <div className='PostOptions'>
                    <img src={logos.postOption} className='PostOptionsLogo'/>
                  </div>
                </div>
                <div className='PostImage'>
                  <img src={post.postPhoto} className='PostImageContent' alt="Post" />
                </div>
                <div className='PostActions'>
                  <div className='PostActionBar'>
                    <div className='PostActionLeft'>
                      <img src={post.liked ? logos.liked : logos.like} className='PostActionIcon' onClick={() => toggleLike(post.id)}/>
                      <img src={logos.comment} className='PostActionIcon' onClick={() => openComments(post.id)}/>
                      <img src={logos.share} className='PostActionIcon'/>
                    </div>
                    <div className='PostActionRight'>
                      <img src={logos.save} className='PostActionIcon'/>
                    </div>
                  </div>
                  <div className='PostActionCount'>
                    <div className='PostLikesCount'>{(post.likes || 0).toLocaleString()} likes</div>
                  </div>
                  <div className='PostCaption'>
                    <div className='PostCaptionText'>
                      <div className='PostCaptionUserName'>{post.userName}</div>
                      <div className='PostCaptionContent'>{post.caption}</div>
                    </div>
                  </div>
                  <div className='PostViewAllComments' onClick={() => openComments(post.id)}>View all {post.comments || (post.commentList ? post.commentList.length : 0)} comments</div>
                </div>

                {/* Comments list collapsed by default; open via View all */}
                <div className='PostCommentSection'>
                  <input
                    type='text'
                    className='PostCommentInput'
                    placeholder='Add a comment...'
                    value={commentDrafts[post.id] || ''}
                    onChange={(e) => setcommentDrafts({ ...commentDrafts, [post.id]: e.target.value })}
                    onKeyDown={(e) => { if (e.key === 'Enter') addCommentToPost(post.id) }}
                  />
                  <img src={logos.commentEmoji} className='PostCommentEmoji' />
                  <div className='PostCommentSubmit' onClick={() => addCommentToPost(post.id)}>Comment</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='AddPostButton' onClick={() => setisCreatePostOpen(true)}>
        <img src={logos.create} className='AddPostButtonLogo' alt='Add post' />
      </div>

      {isCreatePostOpen && (
        <div className='CreatePostOverlay' onClick={() => setisCreatePostOpen(false)}>
          <div className='CreatePostModal' onClick={(e) => e.stopPropagation()}>
            <div className='CreatePostHeader'>New Post</div>
            <div className='CreatePostBody'>
              <div className='CreatePostPreview'>
                {newPostPhotoUrl ? (
                  <img src={newPostPhotoUrl} className='CreatePostPreviewImage' alt='Preview' />
                ) : (
                  <div className='CreatePostPlaceholder'>Select an image to preview</div>
                )}
              </div>
              <input type='file' accept='image/*' className='CreatePostFileInput' onChange={onCreatePostFileChange} />
              <input type='text' className='CreatePostCaptionInput' placeholder='Write a caption...' value={newPostCaption} onChange={(e) => setnewPostCaption(e.target.value)} />
              <div className='CreatePostActions'>
                <div className='CreatePostCancelButton' onClick={() => setisCreatePostOpen(false)}>Cancel</div>
                <div className='CreatePostAddButton' onClick={onAddPost}>Post</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isStoryOpen && stories[activeStoryIndex] && (
        <div className='CreatePostOverlay' onClick={closeStory}>
          <div className='StoryViewerModal' onClick={(e) => e.stopPropagation()}>
            <div className='StoryViewerHeader'>
              <img src={stories[activeStoryIndex].pfp} className='StoryViewerPfp' alt='Profile' />
              <div className='StoryViewerUserName'>{stories[activeStoryIndex].userName}</div>
              <div className='StoryViewerTime'>{stories[activeStoryIndex].timeAgo}</div>
              <div className='StoryViewerClose' onClick={closeStory}>×</div>
            </div>
            <div className='StoryViewerBody'>
              <div className='StoryViewerImageBox'>
                <img src={stories[activeStoryIndex].storyPhoto} className='StoryViewerImage' alt='Story' />
              </div>
              <div className='StoryArrowBtn StoryArrowBtnLeft' onClick={prevStory}>
                <img src={logos.nextButton} className='StoryArrowIconLeft' />
              </div>
              <div className='StoryArrowBtn StoryArrowBtnRight' onClick={nextStory}>
                <img src={logos.nextButton} className='StoryArrowIconRight' />
              </div>
            </div>
          </div>
        </div>
      )}

      {isCommentsOpen && commentsPostId !== null && (
        <div className='CreatePostOverlay' onClick={closeComments}>
          <div className='CommentsModal' onClick={(e) => e.stopPropagation()}>
            <div className='CommentsHeader'>
              Comments
              <div className='CommentsClose' onClick={closeComments}>
                ×
              </div>
            </div>
            <div className='CommentsBody'>
              {(accountDetails.find((p) => p.id === commentsPostId)?.commentList || []).map((c, idx) => (
                <div className='CommentsItem' key={`cm-${commentsPostId}-${idx}`}>
                  {c.pfp && <img src={c.pfp} className='CommentsPfp' alt='pfp' />}
                  <div className='CommentsUserName'>{c.by}</div>
                  <div className='CommentsText'>{c.text}</div>
                </div>
              ))}
            </div>
            <div className='CommentsInputRow'>
              <input
                type='text'
                className='CommentsInput'
                placeholder='Add a comment...'
                value={commentDrafts[commentsPostId] || ''}
                onChange={(e) => setcommentDrafts({ ...commentDrafts, [commentsPostId]: e.target.value })}
                onKeyDown={(e) => { if (e.key === 'Enter') addCommentToPost(commentsPostId) }}
              />
              <div className='CommentsSubmit' onClick={() => addCommentToPost(commentsPostId)}>Post</div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default App
