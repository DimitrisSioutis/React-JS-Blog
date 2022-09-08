import React ,{useEffect, useState} from 'react'
import '../styles/History.css'

const History = () => {
  
  const [opacityA,setOpacityA] = useState('0')
  const [opacityB,setOpacityB] = useState('0')
  const [opacityC,setOpacityC] = useState('0')
  
  useEffect(() => {
    const handleScroll = (e) => {
      console.log('window.scrollY', window.scrollY);
      if(window.scrollY > 400){
        setOpacityA('1');
      }
      if(window.scrollY > 900){
        setOpacityB('1');
      }
      if(window.scrollY > 1500){
        setOpacityC('1');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="history-container">
      <div className="left-side">
        <div className="num left load">1974</div>
        <div className="paragraph load">
          <p>Παρά τα 47 χρόνια ιστορίας της, δεν συμμετείχε στα πρωταθλήματα της Ένωσης Ποδοσφαιρικών Σωματείων Αθήνας
            (ΕΠΣΑ) μέχρι και το 1989,
            δηλαδή εδώ και 33 χρόνια.</p>
        </div>
        <div className="num left reveal-a" style={{opacity: opacityA}}>33</div>
        <div className="paragraph reveal-a" style={{opacity: opacityA}}>
          <p>Η υψηλότερη θέση που έχει κατακτήσει ο σύλλογος είναι η 3η θέση στο πρωτάθλημα της Α’ κατηγορίας, την σεζόν
            2018-19.</p>
        </div>
        <div className="num left reveal-b" style={{opacity: opacityB}}>3</div>
        <div className="paragraph reveal-b" style={{opacity: opacityB}} >
          <p>Οι αδιάψευστοι αριθμοί μιλούν για 1396 βαθμούς (σε 952 αγώνες) τους οποίους έχει συγκεντρώσει συνολικά η
            ΔΙΑΝΑ, η οποία έχει πετύχει 406 νίκες, 223 ισοπαλίες και 322 ήττες.</p>
        </div>
        <div className="num left reveal-c" style={{opacity: opacityC}}>1350</div>
        <div className="paragraph reveal-c" style={{opacity: opacityC}}>
          <p>Η μεγαλύτερη νίκη του συλλόγου μας είναι αυτή κόντρα στον Αίμο Πετρούπολης με 10-1 στο πρωτάθλημα της Β’
            κατηγορίας, το 2000, ενώ η μεγαλύτερη ήττα ήταν αυτή από την ΑΕ Ηρακλείου το 2008 με 9-0, επίσης στο
            πρωτάθλημα της Β’ κατηγορίας.</p>
        </div>
      </div>
      <div className="middle-line">
        <div className="rhombus">
        </div>
        <div className="rhombus-bottom">
        </div>
      </div>
      <div className="right-side ">
        <div className="paragraph load">
          <p>Το σωματείο μας ιδρύθηκε το 1974 απο μία παρέα ανθρώπων που αγαπούσαν το ποδόσφαιρο και ήθελα να
            δημιουργήσουν μία ομάδα γειτονιάς.</p>
        </div>
        <div className="num right load">1989</div>
        <div className="paragraph reveal-a" style={{opacity: opacityA}}>
          <p>Σε αυτά τα 33 χρόνια, η ομάδας μας έχει αγωνιστεί 6 φορές στο πρωτάθλημα της Γ’ κατηγορίας, 13 φορές στην Β’
            και 12 φορές στην Α’ κατηγορία.</p>
        </div>
        <div className="num right reveal-a" style={{opacity: opacityA}}>3η</div>
        <div className="paragraph reveal-b" style={{opacity: opacityB}}>
          <p>Έχει αναδειχθεί 3 φορές πρωταθλήτρια, μία φορά στην Γ’ κατηγορία το 1994 και δύο φορές στην Β’ κατηγορία τις
            σεζόν 2009-10 και 2013-14.</p>
        </div>
        <div className="num right reveal-b" style={{opacity: opacityB}}>1396</div>
        <div className="paragraph reveal-c" style={{opacity: opacityC}}>
          <p>Η ΔΙΑΝΑ έχει πετύχει 1350 γκολ, ενώ έχει δεχθεί 1096.</p>
        </div>
        <div className="num right reveal-c" style={{opacity: opacityC}}>10-1</div>
      </div>
    </div>
  )
}

export default History
