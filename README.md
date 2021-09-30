# Charts
## To see example charts and tables
Open ```examples.html``` in your browser and click on the links.

## Designing graphs and tables:
### Templates 
Create a new template or copy and existing template in the ```templates``` folder. The idea for these is to re-use them for multiple graphs with minimal changes.
- Put the css and html files in their respective folders
- Name it ```style-information.html``` (e.g. ```line-soilmoisture.html```) with identical name for the .css file 
- Try to keep the basic setup area well defined so we can modify it later easily

Once completed add it to a folder named ```deployed```
- Name it ```style-site-information.html``` (e.g. ```line-oai-soilmoisutre.html```)
- Add a link it to it in the ```examples.html``` file so we can easy see what graphs we have

### Color scheme:
Use one of the following color schemes. 
<html>
	<p align="left">
		<img src="/imgs/color-scheme.png" alt="color-scheme" height="300"/>
	</p>
</html>

#### For independent sources
Palette: #003f5c #2f4b7c #665191 #a05195 #d45087 #f95d6a #ff7c43 #ffa600

#### For comparable sources
Sequential: #004c6d #1c5f7f #317391 #4587a3 #589cb5 #6cb1c7 #81c7da #96ddec

#### For good-bad ratings
Divergent: #00876c #429a71 #69ac76 #8ebe7d #b3d086 #d9e092 #fff1a1 #fbd685 #f7ba6e #f29d5e #eb7f54 #e15f50 #d43d51

\*For other charts and tables use colors only from within this color scheme (e.g. for red use #d43d51 or green use #00876c) 

### Aspect ratio (Width:Height):
- For time-series use 2:1
- For non-time-series use 1:1
