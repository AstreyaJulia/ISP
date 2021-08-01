<header class="main-content-header">
    <h3 class="main-content-title"><?= $title; ?></h3>
    <div class="main-content-subheader">
        <div class="breadcrumbs">
            <a href="#" class="breadcrumbs-home">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
                </svg>
            </a>
            <a class="breadcrumbs-item active"><?= $title; ?></a>
        </div>
    </div>
</header>
<div class="card">
    <table class="table table-users">
        <thead>
        <tr>
			<th>PREFIX</th>
			<th>NAME</th>
        </tr>
        </thead>
        <tbody>
        	<?php foreach ($row as $key => $value): ?>
			<tr>
				<td><?= $value->PREFIX; ?></td>
				<td><?= $value->NAME; ?></td>
           </tr>
			<?php endforeach ?>
		</tbody>
	</table>
</div>