from pytube import YouTube 
SAVE_PATH = r"C:/Users/lucas/文件/prestml/iiii"  
link="https://www.youtube.com/watch?v=lOD1JC5JLDw"


yt = YouTube(link)
yt.streams.get_highest_resolution().download(SAVE_PATH, 'ot9e.mp4')