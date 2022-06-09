import React from "react";
import {getAmount} from "../../utils";
import CardWithLeftIcon from "../elements/CardWithLeftIcon";

const JudgeCases = ({className}) => {
    const projects = [{
        name: 'Не рассмотрено', icon: 'mdi-file-sync-outline', href: '#', col: 4, color: 'pink'
    }, {
        name: 'Приостановлено', icon: 'mdi-clock-remove-outline', href: '#', col: 12, color: 'indigo'
    }, {
        name: 'Без движения', icon: 'mdi-file-link-outline', href: '#', col: 16, color: 'yellow'
    }, {name: 'Всего в производстве', icon: 'mdi-file-multiple-outline', href: '#', col: 8, color: 'green'},]

    return (<div className={className || ""}>
        <h2 className="text-gray-500 dark:text-gray-400 text-xs font-medium uppercase tracking-wide">Дела в
            производстве</h2>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 xl:grid-cols-2">
            {projects.map((project) => (
                <CardWithLeftIcon key={project.name} icon={project.icon} color={project.color} href={project.href}
                                  title={project.name} subtitle={`${project.col} ${getAmount(project.col, {
                    single: "дело", multi: "дела", count: "дел"
                })}`} />
            ))}
        </div>
    </div>);
};

export default JudgeCases;
