
### FrontEnd - 

```https://video-sharing-app-yt.vercel.app/```

### BackEnd - 

```https://agreeable-bat-gown.cyclic.app/api/videos/random ```

# 1. Auth API

1. Sign IN API
```http
localhost:5000/api/auth/signin
```
```JSON
{
	"name":"test5",
	"password":"1234"
}
```

2. Sign UP API

```http
localhost:5000/api/auth/signup
```

```JSON
{
	"name":"test5",
	"email":"test5@gmail.com",
	"password":"1234"
}
```



# 2. User/Channel API

 1. update user

```http
localhost:8800/api/users/637343eb0f7b8d2ed2e93ffe
```

```json
{
	"name":"updated2"
}

```


2. delete user

```http
localhost:8800/api/users/637343eb0f7b8d2ed2e93ffe
```


3. unsub a channel

```http
localhost:8800/api/users/unsub/63737d7f1fdf7cc8f924573f
```


4. sub a channel

```http
localhost:8800/api/users/sub/63737d7f1fdf7cc8f924573f
```

5. dislike a video

```http
localhost:8800/api/users/dislike/63737dac1fdf7cc8f9245742
```


6. like a video 

```http
localhost:5000/api/users/like/63737dce1fdf7cc8f9245745
```


7. update view a video

```http
localhost:8800/api/videos/view/63737dce1fdf7cc8f9245745
```


# 3. User Find

1. find a user 

```http
localhost:5000/api/users/find/63737d7f1fdf7cc8f924573f
```


# 4. Comments

1. Get all comments 

```http
localhost:8800/api/comments/63737d7f1fdf7cc8f924573f
```

2. add comment a video

```http
localhost:8800/api/comments
```

```json
{
	"desc":"third comment ",
	"videoId":"63737d7f1fdf7cc8f924573f"
}
```




# 5. Videos

1. trending videos

```http
localhost:5000/api/videos/trend
```


2. get single video

```http
localhost:5000/api/videos/find/63737d7f1fdf7cc8f924573f
```


3. get by query search

```http
localhost:8800/api/videos/search?q=2nd
```



4. get by tags
```http
localhost:8800/api/videos/tags?tags=py
```


5. get random video 

```http
localhost:5000/api/videos/random
```


6. subscribed channel video

```http
localhost:5000/api/videos/sub
```


7. add a video 

```http
localhost:8800/api/videos
```

```json
{
	"title":"the best video from 3rd user",
	"desc":"test desc",
	"imgUrl":"test",
	"videoUrl":"test"
}
```



Videos API

![](https://i.imgur.com/FcgdbLI.png)


User/Channel API

![](https://i.imgur.com/GbRBD8S.png)


Comments API

![](https://i.imgur.com/SvoaWgc.png)



Auth API

![](https://i.imgur.com/i7ar6uA.png)

