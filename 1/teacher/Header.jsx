
// הגדרה של קומפוננטה חדשה: 
// פונקציה שמחזירה חלק וויזואלי, חשוב להקפיד על ה export
// קומפוננטה חייבת להתחיל עם אות גדולה
// כל קמופוננטה מקבלת אוביקט שמקובל לקרוא לו props
// הוא מכיל את המאפינים שנשלחו לקומפוננטה מבחוץ בשם שבו קראו להם מחוץ לקומפוננטה
export function Header(props) {
    console.log(props);
    const className = 'Programing 14 grade';
    // היות ושלחנו מאפיין color 
    // ניתן להשתמש בו כאן
    const color = props.color;
    // יצירת אובייקט עיצוב
    const myStyle = {
        backgroundColor: color,
    };

    // הוספת איצוב לקומפוננט
    return (<header style={{backgroundColor: color, fontSize: '16px'}}>
        <h1>Welcome to react lesson</h1>
        <h2> {className} </h2>
    </header>)
}