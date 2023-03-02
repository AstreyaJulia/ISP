import building from "../../assets/images/icons/building.png";
import floor from "../../assets/images/icons/floor.png";
import door from "../../assets/images/icons/door.png";
import desktop from "../../assets/images/icons/desktop.png";
import powersupply from "../../assets/images/icons/power-supply.png";
import drive from "../../assets/images/icons/drive.png";
import memory from "../../assets/images/icons/memory.png";
import processor from "../../assets/images/icons/processor.png";
import motherboard from "../../assets/images/icons/motherboard.png";
import computercase from "../../assets/images/icons/computer_case.png";
import cooler from "../../assets/images/icons/cooler.png";
import question from "../../assets/images/icons/question.png";

import alarmClock from "../../assets/images/icons/alarm-clock.png";
import application from "../../assets/images/icons/application.png";
import applicationBlock from "../../assets/images/icons/application-block.png";
import applicationTerminal from "../../assets/images/icons/application-terminal.png";
import auctionHammerGavel from "../../assets/images/icons/auction-hammer-gavel.png";
import bank from "../../assets/images/icons/bank.png";
import battery from "../../assets/images/icons/battery.png";
import batteryCharge from "../../assets/images/icons/battery-charge.png";
import batteryPlug from "../../assets/images/icons/battery-plug.png";
import bin from "../../assets/images/icons/bin.png";
import blueFolderNetworkHorizontalOpen from "../../assets/images/icons/blue-folder-network-horizontal-open.png";
import bluetooth from "../../assets/images/icons/bluetooth.png";

const workplacesTreeIcons = (icon) => {
    /*      '': ,      */
    /*      import applicationTerminal from "../../assets/images/icons/";    */

    const icons = {
        'balance': question,

        'alarm-clock': alarmClock,
        'application': application,
        'application-block': applicationBlock,
        'application-terminal': applicationTerminal,
        'auction-hammer-gavel': auctionHammerGavel,
        'bank': bank,
        'battery': battery,
        'battery-charge': batteryCharge,
        'battery-plug': batteryPlug,
        'bin': bin,
        'blue-folder-network-horizontal-open': blueFolderNetworkHorizontalOpen,
        'bluetooth': bluetooth,

        'question': question,
        'building': building,
        'floor': floor,
        'door': door,
        'desktop': desktop,
        'powersupply': powersupply,
        'drive': drive,
        'memory': memory,
        'processor': processor,
        'motherboard': motherboard,
        'computercase': computercase,
        'cooler': cooler,

    }

    return icons[!icon || icon === '' ? 'question' : icon]

};

export default workplacesTreeIcons
