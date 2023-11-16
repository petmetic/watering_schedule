import {PlantList} from "@/components/plant-list";
import {PlantForm} from "@/components/add-plant";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <p>Hello world! This is the beginning of the Watering Schedule App...</p>
            <br/>
            <br/>
            <br/>
            <PlantForm/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <PlantList/>

        </main>
    )
}


// <Button onClick={()=> console.log('Hello')}>Sigh IN</Button>