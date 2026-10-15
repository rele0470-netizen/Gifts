const DB = {
  getUsers: function() {
    return JSON.parse(localStorage.getItem('gift_users') || '[]');
  },

  saveUser: function(user) {
    var users = DB.getUsers();
    var exists = false;
    for (var i = 0; i < users.length; i++) {
      if (users[i].name === user.name) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      users.push(user);
      localStorage.setItem('gift_users', JSON.stringify(users));
    }
  },

  getCurrentUser: function() {
    return JSON.parse(localStorage.getItem('gift_current_user') || 'null');
  },

  setCurrentUser: function(user) {
    localStorage.setItem('gift_current_user', JSON.stringify(user));
  },

  logout: function() {
    localStorage.removeItem('gift_current_user');
  },

  getGifts: function() {
    return [
      // בנות-ילדות (מתנות עם התמונות החדשות שהעלית)
      { id: 1, name: "מברשת הלו קיטי", category: "girl", ageGroup: "child", desc: "מברשת שיער מתוקה בעיצוב הלו קיטי.", img: "בנות-ילדות/מברשת הלו קיטי.png" },
      { id: 2, name: "מחזיק מפתחות מנצנץ", category: "girl", ageGroup: "child", desc: "מחזיק מפתחות מעוצב עם אות, פומפון וסרט פסטל.", img: "בנות-ילדות/מחזיק מפתחות.png" },
      { id: 3, name: "מסרק חד קרן", category: "girl", ageGroup: "child", desc: "מסרק שיער שקוף ומנצנץ עם איור חד קרן.", img: "בנות-ילדות/מסרק חד קרן.png" },
      { id: 4, name: "סט פנקס + עט", category: "girl", ageGroup: "child", desc: "סט כתיבה מתוק של הלו קיטי עם פנקס ועט תואם.", img: "בנות-ילדות/סט פנקס +עט.png" },
      { id: 5, name: "ערכת חרוזים", category: "girl", ageGroup: "child", desc: "ערכה ליצירת צמידים ותכשיטים עם חרוזי אותיות וצבעים.", img: "בנות-ילדות/ערכת חרוזים.png" },
      { id: 6, name: "ערכת טבעות", category: "girl", ageGroup: "child", desc: "מארז טבעות צבעוניות ומתוקות לילדות.", img: "בנות-ילדות/ערכת טבעות.png" },
      { id: 7, name: "ערכת מכשירי כתיבה", category: "girl", ageGroup: "child", desc: "סט כתיבה וציוד לבית הספר בעיצוב הלו קיטי.", img: "בנות-ילדות/ערכת מכשירי כתיבה בנות.png" },
      { id: 26, name: "צמיד פרחים צבעוני לילדות", category: "girl", ageGroup: "child", desc: "צמיד זהב עדין משובץ פרחים צבעוניים מרהיבים לילדות.", img: "בנות-ילדות/צמיד פרחים.png" },
      { id: 27, name: "סט לורדים נצנצים לילדות", category: "girl", ageGroup: "child", desc: "מארז לורדים דו-צדדיים עם צבעי נצנצים מרהיבים ליצירה וכתיבה.", img: "בנות-ילדות/לורדים נצנצים.png" },

      // בנות-בחורות (בחורות / בנות גדולות)
      { id: 8, name: "מברשת מעוצבת עם אות ושם", category: "girl", ageGroup: "adult", desc: "מברשת שיער יוקרתית בגווני שיש ופסטל.", img: "בנות-בחורות/מברשת.png" },
      { id: 9, name: "מברשת + מראה מתקפלת", category: "girl", ageGroup: "adult", desc: "ערכה ניידת קומפקטית עם מראה ומברשת שיער מתקפלת.", img: "בנות-בחורות/מברשת+מראה.png" },
      { id: 10, name: "קופסאות תכשיטים", category: "girl", ageGroup: "adult", desc: "קופסאות תכשיטים יוקרתיות לנסיעות עם תאים לטבעות ושרשראות.", img: "בנות-בחורות/קופסת תכשיטים.png" },
      { id: 11, name: "תיק איפור", category: "girl", ageGroup: "adult", desc: "תיק איפור וטיפוח מעוצב בגוון ורוד פסטל.", img: "בנות-בחורות/תיק איפור.png" },
      { id: 12, name: "תיק שרוך עם שם", category: "girl", ageGroup: "adult", desc: "תיק שרוך קל ונוח בעיצוב פרפרים ופרחוני.", img: "בנות-בחורות/תיק שרוך עם שם.png" },
      { id: 20, name: "מראת איפור מתקפלת עם אות", category: "girl", ageGroup: "adult", desc: "מראת איפור יוקרתית ומתקפלת בעיצוב אישי עם אות ופרחים.", img: "בנות-בחורות/מראת איפור מתקפלת עם אות.png" },
      { id: 21, name: "מברשת עץ חרוטה עם שם", category: "girl", ageGroup: "adult", desc: "מברשת שיער עשויה עץ איכותי בעיצוב אישי עם חריטת שמות .", img: "בנות-בחורות/מברשת עץ עם שם.png" },
      { id: 22, name: "שרוך מחזיק לפלאפון", category: "girl", ageGroup: "adult", desc: "שרוך תלייה אופנתי ומעוצב לפלאפון בצבעי מנטה וורוד עם תליון כוכב.", img: "בנות-בחורות/מחזיק לפלאפון.png" },
      { id: 23, name: "שעון יד אלגנטי", category: "girl", ageGroup: "adult", desc: "שעון יד אופנתי בצבעי מנטה וורוד בעיצוב נקי ומרשים.", img: "בנות-בחורות/שעון.png" },
{ id: 24, name: "אוזניות אלחוטיות איכותיות", category: "girl", ageGroup: "adult", desc: "אוזניות בלוטוס אלחוטיות בעיצוב נקי עם סינון רעשים ואיכות שמע מעולה.", img: "בנות-בחורות/אוזניות בלוטוס.png" },
     // בנים-ילדים
      { id: 11, name: "רכב צעצוע מפלצת", category: "boy", ageGroup: "child", desc: "רכב שטח צעצוע צבעוני וקופצני לילדים.", img: "בנים-ילדים/רכב צעצוע.png" },
      { id: 12, name: "רכב מאוורר / רחפן", category: "boy", ageGroup: "child", desc: "צעצוע רכב חדשני בעיצוב כחול ומרהיב.", img: "בנים-ילדים/מכונית מאווררת.png" },
      { id: 13, name: "ערכת מכשירי כתיבה לבנים", category: "boy", ageGroup: "child", desc: "סט כתיבה מדהים בעיצוב מיקי מאוס לבנים.", img: "בנים-ילדים/ערכת מכשירי כתיבה בנים.png" },
      { id: 14, name: "שעון יד לילדים", category: "boy", ageGroup: "child", desc: "שעון יד כחול בעיצוב רכבים וילדים.", img: "בנים-ילדים/שעון בנים.png" },
      { id: 29, name: "ערכת לגו משטרה", category: "boy", ageGroup: "child", desc: "ערכת בנייה והרכבה של משאית משטרה, לילדים.", img: "בנים-ילדים/ערכת לגו משטרה.png" },
      { id: 30, name: "רחפן מסוק לילדים", category: "boy", ageGroup: "child", desc: "רחפן מסוק עף עם חיישני שליטה ביד וטעינת USB לילדים.", img: "בנים-ילדים/רחפן מסוק.png" },
      // בנים-בחורים
   { id: 25, name: "אוזניות אלחוטיות מתקדמות", category: "boy", ageGroup: "adult", desc: "אוזניות בלוטוס אלחוטיות איכותיות עם שמע נקי ועיצוב אלגנטי.", img: "בנים-בחורים/אוזניות בלוטוס.png" },
   { id: 28, name: "מערכת רמקול ומיקרופון קריוקי", category: "boy", ageGroup: "adult", desc: "רמקול בלוטש נייד מעוצב בצבע תכלת הכולל מיקרופון תואם לשירה ומוזיקה.", img: "בנים-בחורים/מערכת רמקול קריוקי.png" },
   { id: 31, name: "כרטיספר יפה נוף פלדהיים", category: "boy", ageGroup: "adult", desc: "כרטיס מתנה דיגיטלי/פיזי לרכישת ספרי קודש והעשרה ברשת יפה נוף פלדהיים.", img: "בנים-בחורים/כרטיספר.png" },
    ];
  },

  saveGiftChoice: function(userName, giftName) {
    var choices = JSON.parse(localStorage.getItem('gift_choices') || '{}');
    choices[userName] = giftName;
    localStorage.setItem('gift_choices', JSON.stringify(choices));
    alert('הבחירה שלך "' + giftName + '" נשמרה בהצלחה!');
  },

  getChoices: function() {
    return JSON.parse(localStorage.getItem('gift_choices') || '{}');
  }
};