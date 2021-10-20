    export default function Hoc(component){
        return {
            props:component.props,
            mounted(){
                console.log('高阶组件')
            },
            render(h){
                console.log(this);
                const slots = Object.keys(this.$slots)
                    .reduce((arr,key)=>arr.concat(this.$slots[key]),[])
                    .map((vnode)=>{
                        vnode.context = this._self;
                        return vnode;
                    });
                return h(
                    component,
                    {
                        on:this.$listeners,
                        attrs:this.$attrs,
                        props:this.$props
                    },
                    slots
                )
            }
        }
    }