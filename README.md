
# Audible Library Extractor browser extension ((metadata only))

> Supported browsers: Chrome + Firefox 

Automatically generates a searchable gallery by scanning your audible library. If you upload the gallery online, you can share it with others. The gallery can also be very handy for your own use, to find what to listen to next.

### Install
- Firefox - <kbd>https://addons.mozilla.org/en-US/firefox/addon/audible-library-extractor/</kbd>
- ~~Chrome~~ - Chrome webstore release is still pending approval, so you need to install the development release: [instructions](https://github.com/joonaspaakko/audible-library-extractor#how-to-install-developement-releases)

_____

- You can check my Audible library here: [https://joonaspaakko.github.io/my-audible-library/](https://joonaspaakko.github.io/my-audible-library/)
- Screenshots: [screenshot 1](https://github.com/joonaspaakko/audible-library-extractor/blob/master/screenshots/audible-library-extractor-screenshot-1.png?raw=true), [screenshot 2](https://github.com/joonaspaakko/audible-library-extractor/blob/master/screenshots/audible-library-extractor-screenshot-2.png?raw=true), [screenshot 3](https://github.com/joonaspaakko/audible-library-extractor/blob/master/screenshots/audible-library-extractor-screenshot-5.png?raw=true), [screenshot 4](https://github.com/joonaspaakko/audible-library-extractor/blob/master/screenshots/audible-library-extractor-screenshot-4.png?raw=true), [screenshot 5](https://github.com/joonaspaakko/audible-library-extractor/blob/master/screenshots/audible-library-extractor-screenshot-3.png?raw=true)


![](https://github.com/joonaspaakko/audible-library-extractor/blob/master/screenshots/audible-library-extractor-screenshot-1.png)

## How to install developement releases

<details>
  <summary>Read more...</summary>

> These instructions are for [all releases](https://github.com/joonaspaakko/audible-library-extractor/releases) you can find on GitHub.

I would not recommend installing these developement releases, but if you have to, here's how:

### Chrome
  
0. Get the latest audible-library-extractor zip file from the [releases page](https://github.com/joonaspaakko/audible-library-extractor/releases).
1. Go to `chrome://extensions`.
  - Should also be in `Window > Extensions`
2. Turn on the developer mode from the top right
3. Drag the zip file in the browser window to install

### Firefox

> This is a temporary installation that will be gone after a restart.

0. Get the latest audible-library-extractor zip file from the [releases page](https://github.com/joonaspaakko/audible-library-extractor/releases).
1. `Tools > Add-ons`
2. Gear icon on the top right → `Debug Addons`
3. Same spot in the top right `Load Temporary Add-on...`
4. Locate and add the release `.zip` file.

</details>

## How to use the extension

1. Go to your Audible library, 
2. Click the `Audible Library Extractor` link or the extension icon.
    - If you can't find the link, check this [screenshot](https://github.com/joonaspaakko/audible-library-extractor/blob/master/screenshots/audible-library-extractor-screenshot-5.png?raw=true).
3. In the next view you can choose what to extract and start the extraction process by clicking the big blue button: [screenshot](https://github.com/joonaspaakko/audible-library-extractor/blob/master/screenshots/audible-library-extractor-screenshot-4.png?raw=true) 
4. The extraction will take a few minutes. It depends on the size of your library and any of the other things you choose to extract.
6. After the extraction is done the current tab is closed and a new output page for the gallery is opened.
    - You can choose to save the gallery as a standalone web gallery using the [floppy disk button at the top right corner](https://github.com/joonaspaakko/audible-library-extractor/blob/master/screenshots/audible-library-extractor-screenshot-2.png?raw=true).

### Region support?

I would love for this to work on all of the different regions but as of now I would expect it to only work in `audible.com` and possibly any English Audible websites. If you're having trouble using the extension in another region, please post an issue and any useful details to pinpoint the issue(s). The gallery itself is in English and there are no plans to support multiple languages.

______	

## Save gallery locally

The gallery can be saved easily by clicking the save icon at the top of the extensions output page. One option for sharing the gallery would be to send the exported zip file via email and once the zip is unpacked the index.html inside can be opened in a browser and viewed locally by anyone you send the files to.

The slightly more advanced way to share it, but way more versatile option would be to upload the gallery online. If you already have a web hosting plan, there's nothing to it, you should know what to do. Just upload the files to and you're done. But for all others, I would recommend Github Pages because you can get this website running for free with a reasonable domain name even, but that said it is not exactly the simplest process.

As an example, here's [my Audible library in Github](https://joonaspaakko.github.io/my-audible-library/).

### Uploading your gallery to Github as a website

<details>
  <summary>Read more...</summary>

This is a fairly complex process if you've never used Github/Git to make repositories, but it is a free way to get your site on the internets, so there's that. The complexity comes mostly from how Git/Github works and what it's mainly for. You don't need to touch any code, it's just a matter of learning how it works and clicking your way through the process._

> Be aware that Github Pages only work on public repositories on the free account. This means that the repository/the files are more freely available than on a more traditional hosting platform. For example the repository for my audible library website I linked to above is accessible from this address [https://github.com/joonaspaakko/my-audible-library](https://github.com/joonaspaakko/my-audible-library). Anyone can clone (fork) this repository and use it as they please. In this instance it shouldn't be a problem because this extension doesn't gather any information that could be used against you in any way.


> If you know how to make a regular repository in Github but haven’t used GitHub Pages before, jump straight to step 3.

1. You need a (free) [github account ](https://github.com/join).
2. For things to not get totally out of hand in terms of complexity, you will definitely want to use the [Github Desktop client](https://desktop.github.com/).
	1. In Github Desktop you first make the repository `File > New repository`, which you can think of as a project folder in your account. The only thing you need to add when creating a new repository is the name for the project, for example I named mine `my-audible-library`.
	2. If you select the project you should see a button that opens the project folder in your computer. Click the button and put the zip file you got from the extension’s gallery in that folder.
		- You need to unpack the zip file here. Then you can remove the zip file.
	3. Now when you open Github Desktop, it should show you that new files were added to the project.
	4. In the bottom left there's `Summary, Description, and Commit to master`. This is where you basically save the changes in your project.
		1. You need to always give summary before you can commit (save). In this case you don't have to be descriptive at all. You can make summary a `-` for all your commits if you want. It doesn’t matter much in this case.
		2. When you click `Commit to master`, you're almost there. The changes are now saved locally, but you then have to upload the files to Github…
		3. Upload the files with the `Push origin` button.
3. So now the Github project repository should be online, but you still need to tell Github that you want this to be a website.
	- Super short instructions: 
		1. Go to the project repository page online and click `Settings`. 
		2. In there you can find a section called `GitHub Pages`. 
		3. Choose `Master branch` in the `Source` dropdown and when that’s done. It should tell you what the website address is, which should be along the lines of `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME`.
	- You can find more comprehensive instructions [here](https://pages.github.com/). To get the right instructions just select `Project site` and `Start from scratch`. You can skip to step 4 in the Github article.
4. When you've got all this done and the project repository is set as a website, you can share the address with anyone. And to be clear, they don't need a Github account to view the gallery.


**What if I want to upload my updated gallery again?**

1. I assume you have probably run the partial library extraction.
2. Then save the gallery again using the floppy disk icon.
3. Remove all files in your github repository folder on your computer.
4. Extract the new .zip → copy over to the github repository folder.
5. In the Github Desktop client open the audible library project
7. Commit changes
8. Push origin
9. And the website should be online in a couple minutes.

</details>
