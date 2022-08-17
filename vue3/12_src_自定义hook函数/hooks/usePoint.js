import {reactive,onMounted,onBeforeMount} from "vue";
export default function usePoint(){
    let point = reactive({
        x:0,
        y:0
    })

    const savePoint = event =>{
        console.log(event.pageX,event.pageY)
        point.x=event.pageX,
        point.y=event.pageY
    }
    onMounted(()=>{
        window.addEventListener('click',savePoint)
    })

    onBeforeMount(()=>{
        window.removeEventListener('click',savePoint)
    })

    return point
}
