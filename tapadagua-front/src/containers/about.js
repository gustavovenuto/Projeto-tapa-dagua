import {Link} from 'react-router-dom'
import './about.css'

function About() {
    return(
        <div className="about">
            <h3> O projeto Tapa d'água</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu dignissim ante. In hac habitasse platea dictumst. Pellentesque consequat sit amet felis sit amet congue. In hac habitasse platea dictumst. Duis ultricies auctor justo sagittis pulvinar. Mauris consectetur libero vel lectus varius, eget mattis nisi facilisis. Nam in posuere justo, non elementum sem. Curabitur sem magna, lacinia vel fringilla in, varius et tortor. Integer facilisis mollis metus eu feugiat. Praesent nec felis sit amet orci rutrum rhoncus vitae ut lorem. Maecenas auctor at urna in rhoncus. Donec malesuada nunc congue pretium volutpat. Morbi ac tellus id purus convallis sagittis. Vestibulum nec imperdiet nulla, ornare facilisis tortor. Suspendisse nec erat imperdiet nibh dignissim pharetra sit amet et dolor. Ut purus libero, vulputate ut laoreet eu, consequat vel lorem. </p>
            <p>Curabitur ornare, purus et sagittis varius, libero ex ultricies dui, id eleifend metus mauris dignissim velit. Fusce quis urna ac turpis feugiat lacinia at accumsan erat. Donec gravida hendrerit sodales. In hac habitasse platea dictumst. Suspendisse venenatis nunc id dui aliquet finibus id vitae augue. Fusce feugiat erat malesuada dolor suscipit volutpat. Sed tristique ut lorem sit amet lacinia. Donec sit amet lectus finibus, eleifend ligula non, aliquam tortor. Mauris sagittis viverra ante.</p>
            <Link to="/" className="LinksTo">Voltar</Link>
        </div>
    )
}

export default About