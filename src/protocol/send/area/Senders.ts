import { ToPcArea } from "./senders/ToPcArea";

export module Senders {
    export function toPcArea() {
        return new ToPcArea();
    }
}