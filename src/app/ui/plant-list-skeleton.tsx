import {Skeleton} from "@/components/ui/skeleton";

export function PlantListSkeleton() {
    return (
        <Skeleton className="w-[100px] h-[20px] rounded-full">
            <div>List of plants</div>
            <div>
                <div>
                    <div className="w-[100px]">Plant Name</div>
                    <div>Image</div>
                    <div>Location</div>
                    <div>Status</div>
                </div>
            </div>
        </Skeleton>
    )
}

//TODO: style the skeleton