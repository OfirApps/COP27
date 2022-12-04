nStart = "<span style='font-size:1.1em; color:black;'>הערות:</span><br>"
sharebtn = document.querySelector("#posterdisplay > div > div:nth-child(2)")
function generateLink(link, text) {
  if (text == null) {
    text = link
  }
  return '<a href="' + link + '" class="hyper" target="_blank">' + text + '</a>'
}
subject = [
  "אפקט החממה",
  "התמעטות גשמים",
  "אנרגיות מתחדשות",
  "הפשרת קרחונים",
  "דלק מאובנים",
  "שריפות פרא",
  "אקטיביזם",
  "הערכות לשינויי אקלים",
  "מזג אוויר קיצוני",
  "כריתת יערות העד",
  "גלי חום",
  "התחממות גלובלית",
  "תאגידי דלקים",
  "התחממות גלובלית"
]
megishim = [
  "מיקה, רותם ואופיר",
  "אייל, אדם ונועם",
  "רועי, אמיר ולירון",
  "ערן ת, גיא ל ואורי",
  "עמית, יעל ובר",
  "אביב, קית ורווה",
  "נתנאל, אלון וערן צ",
  "פלג, עידן ותומר",
  "אריאל, רוני ועמרי",
  "אוהד, גיא ס ומיכאל",
  "נגה, נועה ותמר",
  "אלה וטליה",
  "מור, נטע וענבר",
  "ארז"
]

notes = [
  nStart + "קישור 1: " + generateLink("https://www.thinglink.com/scene/1654918278872563715") + "<br>" + "קישור 2: " + generateLink("https://il.brainpop.com/category_8/subcategory_102/subjects_575/") + "<br>" + "קישור 3: " + generateLink("https://quizizz.com/join?gc=43377483"),
  nStart + "קישור 1 (QR): " + generateLink("https://epoch.org.il/history/471014/") + "<br>" + "קישור 2: (QR): " + generateLink("https://www.ynet.co.il/articles/0,7340,L-5336026,00.html") + "<br>" + "קישור 3 (QR): " + generateLink("https://www.themarker.com/wallstreet/2021-07-28/ty-article/.premium/0000017f-f5c5-d887-a7ff-fde5f97a0000","https://www.themarker.com/wallstreet/2021-07-28/..."),
  "",
  nStart + "מקור מידע: " + generateLink("https://davidson.weizmann.ac.il/tags/המסת-קרחונים"),
  nStart + "קישור 1 (QRׁ): " + generateLink("https://www.calcalist.co.il/world_news/article/S1XTGxEwO") + "<br>" + "קישור 2 (QRׁׂׂ): " + generateLink("https://youtu.be/CpWRjv1tEck") + "<br>" + "קישור 3 (QR): " + generateLink("https://www.ynet.co.il/environment-science/article/rygb7ah11s"),
  "",
  "",
  "",
  nStart + "קישור 1: " + generateLink("https://www.globes.co.il/news/article.aspx?did=1001376338") + "<br>" + "קישור 2: " + generateLink("https://www.kikar.co.il/interesting/410124") + "<br>" + "קישור 3: " + generateLink("https://bit.ly/3iCiqZx"),
  "",
  nStart + "קישור 1: " + generateLink("https://13tv.co.il/item/news/domestic/internal/epanq-903180669"),
  nStart + "מקורות מידע: " + generateLink("https://www.linkslist.app/RJE8vnZ","רשימת מקורות מידע"),
  nStart + "קישור 1: " + generateLink("https://youtu.be/Q4Fl5sC6z-8") + "<br>" + "קישור 2: " + generateLink("https://www.greenpeace.org/israel/news/50911/%d7%94%d7%97%d7%99%d7%99%d7%9d-%d7%a9%d7%9c%d7%a0%d7%95-%d7%a9%d7%95%d7%95%d7%99%d7%9d-%d7%99%d7%95%d7%aa%d7%a8/", "(קוד QR)"),
  nStart + "קישור 1 (QR): " + generateLink("https://qrco.de/bdY2s8")
]
avalible = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
window.addEventListener('DOMContentLoaded', (event) => {
  //document.getElementsByClassName("poster")[0].innerHTML = '<img src="posters/thumbs/poster13.jpg" alt="פוסטר מספר ' + (12+1) + '"> <br><p class="noshe">' + subject[12] + '</p><p class="megishim">' + megishim[12] + '</p><p class="hyper">צפייה</p>'
  document.getElementById("year").innerHTML = new Date().getFullYear()
  for (i = 0; i < 14; i++) {
    if (avalible.includes(i+1)) {
      document.getElementsByClassName("poster")[i].innerHTML = '<img src="/posters/thumbs/poster' + (i+1) + '.jpg" alt="פוסטר מספר ' + (i + 1) + '"> <br><p class="noshe">' + subject[i] + '</p><p class="megishim">' + megishim[i] + '</p><p class="hyper">צפייה</p>'
    } else {
      document.getElementsByClassName("poster")[i].innerHTML = '<img src="noPoster.jpg" alt="פוסטר מספר ' + (i + 1) + '"> <br><p class="noshe">' + subject[i] + '</p><p class="megishim">' + megishim[i] + '</p><p class="hyper">צפייה</p>'
    }
    // document.getElementsByName("poster")[i].innerHTML = '<img src="/posters/thumbs/poster' + i + '.jpg">'

    
  }
});

function show(what) {

  document.querySelector("#posterdisplay > div > div:nth-child(1)").setAttribute("onclick", "back(" + what + ")")
  document.querySelector("#dispbnoshe").innerHTML = subject[what]
  document.querySelector("#dispmegishim").innerHTML = megishim[what]
  document.querySelector("#dispnotes").innerHTML = notes[what]
  if (avalible.includes(what+1)) {
    document.querySelector("#posterdisplay > img").src = "/posters/thumbs/poster" + (what + 1) + ".jpg"
  } else {
    document.querySelector("#posterdisplay > img").src = "noPoster.jpg"
  }
  
  document.querySelector("#posterdisplay > div > div:nth-child(3)").setAttribute("onclick", "window.open('https://cop27yahalom.ml/posters/pdfs/poster" + (what + 1) + ".pdf')")
  //////////////////////////////////////////
  document.getElementById("posterdisplay").style.display = ""
  document.getElementById("body").style.opacity = 0
  setTimeout(function() {
    document.querySelector("#posterdisplay > img").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    document.getElementById("posterdisplay").style.opacity = 1
    setTimeout(function() {
      document.getElementById("body").style.display = "none"
    }, 500)
  }, 250)
  const shareData = {
    title: 'COP27',
    text: 'תראו את הפוסטר הזה, הוא מדבר על ' + subject[what] + '!' + ' הוא נוצר ע"י הכיתה המדעית בהשראה מועידת האקלים ה27 של האו"ם!',
    url: 'https://cop27yahalom.ml?poster=' + what
  }

  sharebtn.onclick = async () => {
    try {
      await navigator.share(shareData);
      console.log('shared successfully')
    } catch (err) {
      console.log(`Error: ${err}`)
    }
  };
}

function back(from) {
  document.getElementById("body").style.display = ""
  document.getElementById("posterdisplay").style.opacity = 0
  setTimeout(function() {
    document.getElementsByClassName("poster")[from].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    document.getElementById("body").style.opacity = 1
    setTimeout(function() {
      document.getElementById("posterdisplay").style.display = "none"
    }, 500)
  }, 250)
}

let params = (new URL(document.location)).searchParams;
if (params.has('poster')) {
  show(Math.round(params.get('poster')))
  console.warn("----------\nLoaded Shared Poster\n-----------")
} else {
  console.warn("no shared poster!")
}