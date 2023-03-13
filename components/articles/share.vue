<template>
    <div class="block pt-2 py-5 rounded-t-lg clear-both">
        <ul class="share-buttons" data-source="simplesharingbuttons.com">
            <li class="drop-shadow">
                <a
                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fallenplay.net&quote="
                    title="Share on Facebook"
                    target="_blank"
                    onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.URL) + '&quote=' + encodeURIComponent(document.URL)); return false;"
                    ><img
                        alt="Share on Facebook"
                        src="/images/flat_web_icon_set/inverted/Facebook.png"
                /></a>
            </li>
            <li class="drop-shadow">
                <a
                    href="https://twitter.com/intent/tweet?source=https%3A%2F%2Fallenplay.net&text=:%20https%3A%2F%2Fallenplay.net"
                    target="_blank"
                    title="Tweet"
                    onclick="window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(document.title) + ':%20'  + encodeURIComponent(document.URL)); return false;"
                    ><img
                        alt="Tweet"
                        src="/images/flat_web_icon_set/inverted/Twitter.png"
                /></a>
            </li>
            <li class="drop-shadow">
                <a
                    href="http://www.tumblr.com/share?v=3&u=https%3A%2F%2Fallenplay.net&quote=&s="
                    target="_blank"
                    title="Post to Tumblr"
                    onclick="window.open('http://www.tumblr.com/share?v=3&u=' + encodeURIComponent(document.URL) + '&quote=' +  encodeURIComponent(document.title)); return false;"
                    ><img
                        alt="Post to Tumblr"
                        src="/images/flat_web_icon_set/inverted/Tumblr.png"
                /></a>
            </li>
            <li class="drop-shadow">
                <a
                    href="http://pinterest.com/pin/create/button/?url=https%3A%2F%2Fallenplay.net&description="
                    target="_blank"
                    title="Pin it"
                    onclick="window.open('http://pinterest.com/pin/create/button/?url=' + encodeURIComponent(document.URL) + '&description=' +  encodeURIComponent(document.title)); return false;"
                    ><img
                        alt="Pin it"
                        src="/images/flat_web_icon_set/inverted/Pinterest.png"
                /></a>
            </li>
            <li class="drop-shadow">
                <a
                    href="https://getpocket.com/save?url=https%3A%2F%2Fallenplay.net&title="
                    target="_blank"
                    title="Add to Pocket"
                    onclick="window.open('https://getpocket.com/save?url=' + encodeURIComponent(document.URL) + '&title=' +  encodeURIComponent(document.title)); return false;"
                    ><img
                        alt="Add to Pocket"
                        src="/images/flat_web_icon_set/inverted/Pocket.png"
                /></a>
            </li>
            <li class="drop-shadow">
                <a
                    href="http://www.reddit.com/submit?url=https%3A%2F%2Fallenplay.net&title="
                    target="_blank"
                    title="Submit to Reddit"
                    onclick="window.open('http://www.reddit.com/submit?url=' + encodeURIComponent(document.URL) + '&title=' +  encodeURIComponent(document.title)); return false;"
                    ><img
                        alt="Submit to Reddit"
                        src="/images/flat_web_icon_set/inverted/Reddit.png"
                /></a>
            </li>
            <li class="drop-shadow">
                <a
                    href="http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fallenplay.net&title=&summary=&source=https%3A%2F%2Fallenplay.net"
                    target="_blank"
                    title="Share on LinkedIn"
                    onclick="window.open('http://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(document.URL) + '&title=' +  encodeURIComponent(document.title)); return false;"
                    ><img
                        alt="Share on LinkedIn"
                        src="/images/flat_web_icon_set/inverted/LinkedIn.png"
                /></a>
            </li>
            <li class="drop-shadow">
                <a
                    href="http://wordpress.com/press-this.php?u=https%3A%2F%2Fallenplay.net&quote=&s="
                    target="_blank"
                    title="Publish on WordPress"
                    onclick="window.open('http://wordpress.com/press-this.php?u=' + encodeURIComponent(document.URL) + '&quote=' +  encodeURIComponent(document.title)); return false;"
                    ><img
                        alt="Publish on WordPress"
                        src="/images/flat_web_icon_set/inverted/Wordpress.png"
                /></a>
            </li>
            <li class="drop-shadow">
                <a
                    href="https://pinboard.in/popup_login/?url=https%3A%2F%2Fallenplay.net&title=&description="
                    target="_blank"
                    title="Save to Pinboard"
                    onclick="window.open('https://pinboard.in/popup_login/?url=' + encodeURIComponent(document.URL) + '&title=' +  encodeURIComponent(document.title)); return false;"
                    ><img
                        alt="Save to Pinboard"
                        src="/images/flat_web_icon_set/inverted/Pinboard.png"
                /></a>
            </li>
            <li class="drop-shadow">
                <a
                    href="mailto:?subject=&body=:%20https%3A%2F%2Fallenplay.net"
                    target="_blank"
                    title="Send email"
                    onclick="window.open('mailto:?subject=' + encodeURIComponent(document.title) + '&body=' +  encodeURIComponent(document.URL)); return false;"
                    ><img
                        alt="Send email"
                        src="/images/flat_web_icon_set/inverted/Email.png"
                /></a>
            </li>
        </ul>
    </div>
</template>

<style scoped>
ul.share-buttons{
  list-style: none;
}

ul.share-buttons li{
  display: inline-flex;
  margin-right: 10px;
}

ul.share-buttons .sr-only{
  position: absolute;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;
}
</style>
