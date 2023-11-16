import {PlantList} from "@/components/plant-list";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <p>Hello world! This is Meta...</p>

            <PlantList>
            </PlantList>


        </main>
    )
}


// <Button onClick={()=> console.log('Hello')}>Sigh IN</Button>