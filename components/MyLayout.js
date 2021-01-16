import Headers from './Header';
import Footer from './Footer';
// import '../Css/style.css'

const layoutStyle = {
 margin: 20,
 padding: 20,
 border: '1px solid #DDD'
}

export default (props) => (
 <div>
   <Headers />
   {props.children}
   <Footer />
 </div>
)