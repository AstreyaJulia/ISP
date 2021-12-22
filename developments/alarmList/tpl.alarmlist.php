<table>
    <caption>я кривая таблица</caption>
    <thead>
        <tr>
            <th>№ Трев. Кнопки</th>
            <th>Судья</th>
            <th>Каби-нет</th>
            <th>Телефон</th>
            <th>Помощник</th>
            <th>Каби-нет</th>
            <th>Телефон</th>
            <th>Секретарь</th>
            <th>Каби-нет</th>
            <th>Телефон</th>
        </tr>
    </thead>
    <tbody>
    <?php foreach ($family as $key => $value): ?>
        <tr>
            <td><?= $value["alarm_button"]; ?></td>
            <td><?= $value["fullname"]; ?></td>
            <td><?= mb_substr($value["position"], 1, strpos($value["position"], '_') - 2); ?></td>
            <td>8 (48142) <?= $value["phone_worck"]; ?></td>
            <?php foreach ($value as $key1 => $value1): ?>
                <?php if (is_array($value1)): ?>
                    <?php foreach ($value1 as $key2 => $value2): ?>
                        <?php if (count($value1) == 2): ?>
                            <td><?= $value2->fullname; ?></td>
                            <td><?= mb_substr($value2->position, 1, strpos($value2->position, '_') - 2); ?></td>
                            <td>8 (48142) <?= $value2->phone_worck; ?></td>
                        <?php endif; ?>
                        <?php if (count($value1) == 1 and $value2->profession == 9): ?>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><?= $value2->fullname; ?></td>
                            <td><?= mb_substr($value2->position, 1, strpos($value2->position, '_') - 2); ?></td>
                            <td>8 (48142) <?= $value2->phone_worck; ?></td>
                        <?php endif; ?>
                        <?php if ((count($value1) == 1 and $value2->profession == 6) or (count($value1) == 1 and $value2->profession == 7)): ?>
                            <td><?= $value2->fullname; ?></td>
                            <td><?= mb_substr($value2->position, 1, strpos($value2->position, '_') - 2); ?></td>
                            <td>8 (48142) <?= $value2->phone_worck; ?></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        <?php endif; ?>
                    <?php endforeach ?>
                <?php endif; ?>
            <?php endforeach ?>
        </tr>
    <?php endforeach ?>
    </tbody>
</table>