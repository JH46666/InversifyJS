import { InversifyKoaServer  } from "inversify-koa-utils";

import "reflect-metadata"
import {Container} from './ioc'

import './ioc/loader'
//基础的容器
const container = new Container();

//加载容器
let server = new InversifyKoaServer(container);

//启动容器 
let app = server.build();

app.listen(3000, ()=>{
    console.log('invwersify 实践solid系统启动成功')
})