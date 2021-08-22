create table sdc_calendar
(
    id          int(10) auto_increment,
    title       varchar(100) collate utf8mb4_unicode_ci            not null,
    description text collate utf8mb4_unicode_ci         default '' not null,
    start       datetime                                           null,
    end         datetime                                           null,
    allDay      varchar(1) collate utf8mb4_unicode_ci   default '' not null,
    calendar    varchar(100) collate utf8mb4_unicode_ci default '' not null,
    url         varchar(100) collate utf8mb4_unicode_ci default '' not null,
    user_id     int(10)                                            not null,
    freq        varchar(50)                                        null,
    dtstart     datetime                                           null,
    tzid        varchar(100)                                       null,
    until       datetime                                           null,
    count       int                                                null,
    `interval`  int                                                null,
    byweekday   varchar(50)                                        null,
    bymonth     varchar(50)                                        null,
    bysetpos    int                                                null,
    bymonthday  varchar(150)                                       null,
    byyearday   varchar(2000)                                      null,
    byweekno    varchar(250)                                       null,
    constraint sdc_calendar_id_uindex
        unique (id)
);

alter table sdc_calendar
    add primary key (id);

