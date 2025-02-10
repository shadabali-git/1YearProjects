import React,{useEffect, useState} from 'react';
import ColorfulText from './ColorfulText';

  

const Box = () => {

 const [paragraph,setParagraph]= useState([
    {
      "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor, nulla id dignissim elementum, urna lectus tincidunt justo, eget varius justo odio vel sapien. Integer pharetra, mauris at suscipit suscipit, ligula sapien viverra justo, in scelerisque turpis lorem eu ligula. Aenean faucibus metus ut felis consectetur venenatis. Phasellus id sagittis nulla, sed cursus massa. Nam nec fermentum lorem, nec vestibulum dolor. Nulla facilisi. Sed a orci eu elit tempus bibendum. Vestibulum in nisi nulla. Curabitur id interdum turpis. Aliquam erat volutpat."
    },
    {
      "text": "Vivamus facilisis, turpis eget varius malesuada, elit lacus vehicula sapien, vel cursus erat orci et magna. Donec sodales, libero sit amet suscipit vestibulum, odio lorem vehicula orci, vitae convallis nisi purus euismod orci. Morbi nec purus a urna vulputate laoreet. Ut vehicula, nisl eget malesuada sodales, quam lacus malesuada nunc, ac bibendum orci ligula ut velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer non diam at velit facilisis faucibus ut eu est. Aenean semper nisl non nunc consequat, sed commodo metus ultrices."
    },
    {
      "text": "Fusce ac libero nec nisi convallis gravida ac a enim. Nulla facilisi. Phasellus bibendum auctor nisl, nec ullamcorper erat vulputate sit amet. Mauris nec tincidunt erat. Nam condimentum dui sed justo varius, ut bibendum orci interdum. Aenean fermentum leo vitae risus tristique, in scelerisque leo convallis. Suspendisse vehicula diam id leo ultricies, a consectetur mauris scelerisque. Donec sit amet posuere nunc, eget hendrerit magna. Praesent suscipit lectus at nulla tristique interdum. Nam at magna dolor. Quisque id nisl ultricies, tincidunt nunc id, fermentum dolor."
    },
    {
      "text": "Aliquam erat volutpat. Curabitur ac est lacus. Cras eget lorem felis. Sed nec sem felis. Curabitur ut dignissim lectus. Ut a est mi. Cras viverra nulla in ipsum auctor, sed scelerisque arcu sollicitudin. Proin nec semper elit. In non interdum lectus. Vestibulum tincidunt massa nec velit pharetra, et vestibulum dui interdum. Cras suscipit libero eget eros ultrices, nec feugiat orci tincidunt. In hac habitasse platea dictumst. Phasellus ac sem non justo pharetra convallis. Sed euismod, leo at cursus convallis, sem elit lobortis lorem, id dictum orci dui ut odio."
    },
    {
      "text": "Mauris facilisis interdum magna, eget auctor justo facilisis et. Integer vitae justo et justo ullamcorper congue. In rhoncus metus nec quam dictum, et tempor urna hendrerit. Aliquam quis nunc vitae risus dignissim dapibus. Nulla facilisi. Vestibulum vitae est arcu. Nam faucibus lacinia est, nec dapibus velit pharetra at. Suspendisse potenti. Donec feugiat eros non ipsum vehicula, quis iaculis est sagittis. Nam auctor mi sit amet turpis tincidunt, vel convallis leo fermentum. Donec in urna vel orci accumsan consectetur. Phasellus consequat magna et quam placerat, nec malesuada leo auctor."
    },
    {
      "text": "Nunc viverra, eros eget auctor fermentum, risus leo facilisis nunc, non pulvinar urna sapien a libero. Vivamus sit amet eros vestibulum, vestibulum metus nec, consequat metus. Morbi suscipit auctor augue a dapibus. Integer at hendrerit elit. Nullam vitae est id sem accumsan suscipit. Quisque vitae lacinia turpis. Integer fermentum ullamcorper metus, et egestas sem bibendum et. Ut nec risus et libero varius vehicula. Proin ut lorem mi. Fusce eget pharetra elit, id luctus libero. Aliquam erat volutpat. Nulla tristique erat vel augue vehicula tincidunt."
    },
    {
      "text": "Sed venenatis, dolor non fringilla lacinia, dolor est tincidunt est, vel tincidunt nulla lacus at sapien. Sed nec suscipit sapien, sit amet bibendum nulla. Fusce vel metus eu urna eleifend volutpat. Donec pharetra, turpis a finibus vestibulum, risus neque malesuada lacus, vel euismod lorem nunc in turpis. Aenean pretium metus in sapien posuere, sit amet tincidunt leo malesuada. Morbi eget magna auctor, hendrerit nisi eget, vehicula lorem. Donec vehicula metus nec ex tincidunt facilisis. Curabitur vel elit sed magna lobortis pretium eget non risus."
    },
    {
      "text": "Suspendisse ut ipsum eu orci volutpat suscipit. Proin id quam eu mauris pharetra hendrerit. Sed rutrum, libero id gravida sollicitudin, nulla justo tincidunt risus, sed sollicitudin felis ligula ac erat. Sed vestibulum interdum velit, et ultricies risus fermentum sit amet. Nulla facilisi. Ut luctus magna non justo tincidunt, sed gravida risus malesuada. Quisque volutpat, turpis a lacinia blandit, orci velit malesuada quam, eget dictum risus orci et turpis. Cras posuere massa a quam fermentum, sed interdum velit ullamcorper. Nullam malesuada felis ut quam ultrices sodales."
    },
    {
      "text": "Etiam ullamcorper arcu vel eros dapibus, id vestibulum arcu lacinia. Ut auctor euismod orci, at scelerisque odio interdum nec. Sed vitae urna dapibus, lacinia eros nec, tristique elit. Sed tristique euismod odio, in facilisis orci. Nunc malesuada tortor vitae leo elementum, id vehicula libero convallis. Suspendisse potenti. Duis fringilla erat sit amet ligula scelerisque tincidunt. Aenean vehicula mauris sit amet ipsum scelerisque venenatis. In hac habitasse platea dictumst. Integer dapibus nisi a arcu gravida, nec iaculis mi dictum. Fusce ultricies leo vitae eros efficitur, sit amet."
    },
    {
      "text": "Curabitur elementum, purus et gravida fermentum, sapien turpis tempus libero, sit amet fermentum purus mi a dolor. Nullam consectetur ipsum sed eros auctor, ut malesuada erat pharetra. Nulla viverra, lorem in feugiat eleifend, lacus ipsum vestibulum mi, et pharetra velit arcu quis libero. Aenean pharetra ante quis nunc suscipit, et interdum velit hendrerit. Proin quis mi vitae nisl fringilla bibendum. Integer id felis non turpis auctor finibus nec at elit. Duis non nunc id metus fermentum interdum. Aenean sed magna in nunc facilisis ultricies."
    }
  ]);
  const GenerateRandom=()=>{
    let random = Math.floor(Math.random() * paragraph.length);
    // console.log(paragraph[random].text);
    return paragraph[random].text;
  }
  const [text,setText]=useState(GenerateRandom());

    useEffect(() => {
        // const interval = setInterval(() => {
            setText(GenerateRandom());
        // }, 10000);
        // return () => clearInterval(interval);
    },[]);
    return (
        <div className=' h-full pl-20 pr-20 mx-auto flex justify-center mt-3 md:overflow-y-scroll overflow-y-auto'>
            {/* <img className='rounded-md hover:scale-125 transition-all duration-700 ease-in-out cursor-pointer hover:shadow-2xl hover:shadow-amber-600 grayscale hover:grayscale-0'
                src="notes.png"
                alt="Okey wotking" /> */}

            {/* <div className='w-full h-full absolute text-4xl p-4 leading-loose'> */}

                <ColorfulText letters={text.split("")} />
            



        </div>
    );
}

export default Box;
