import Channel from "./Channel";

const ChannelFeed = ({channels}) =>{
    return (
        <div className="w-[95%] h-fit  ">
            <h1 className="font-black">All Channels</h1>
            <div className="flex overflow-x-auto scroll-smooth p-2 gap-2.5">
                <Channel/>
                <Channel/>
                <Channel/>
                <Channel/>
                <Channel/>
                <Channel/>
                <Channel/>
                <Channel/>
                <Channel/>
                <Channel/>
                <Channel/>
                <Channel/>
                <Channel/>
                <Channel/>
                <Channel/>
                <Channel/>
                <Channel/>
                <Channel/>
            </div>
        </div>
    );
}
export default ChannelFeed;