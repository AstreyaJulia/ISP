<?php
ini_set("display_errors", "on");
spl_autoload_register(function($class) {
	$filename = $_SERVER['DOCUMENT_ROOT'] . '/core/extension/' . str_replace('\\', '/', $class) . '.php';
	require ($filename);
	//var_dump($filename);
});



$source = __DIR__."/docs/text.docx";

$objReader = \PhpOffice\PhpWord\IOFactory::createReader('Word2007');

$phpWord = $objReader->load($source);


$body = '';
foreach($phpWord->getSections() as $section) {
	$arrays = $section->getElements();
	
	foreach($arrays as $e) {
		if(get_class($e) === 'PhpOffice\PhpWord\Element\TextRun') {

			foreach($e->getElements() as $objTextRun) {
				if (get_class($objTextRun) === 'PhpOffice\PhpWord\Element\Text') {
					$font = $objTextRun->getFontStyle();
					
					$size = $font->getSize()/10;
					$bold = $font->isBold() ? 'font-weight:700' :'';
					$color = $font->getColor();
					$fontFamily = $font->getName();

					/*$StyleValues = $font->getStyleValues();
					$position = $font->getPosition();
					echo "<pre>";
					print_r($StyleValues);
					$paragraph = $font->getParagraph();
					$align = $paragraph->gettextAlignment();*/
					/*echo "<pre>";
					print_r($paragraph);
					break;*/


					
					$body .= '<span style="font-size:' . $size . 'em;font-family:' . $fontFamily . '; '.$bold.'; color:#'.$color.'">';
					$body .= $objTextRun->getText().'</span>';
					//echo "<pre>";
					//print_r($font);
					//break;
					
					//$objTextRun->getText();
				}
				if (get_class($objTextRun) === 'PhpOffice\PhpWord\Element\Image') {
					$font = $objTextRun->getStyle();
					$width = $font->getWidth();
					$body .= '<div style="color:red;  text-align:center;"><img style="width:'.$width.'px;" src="data:image/jpeg;base64,'.$objTextRun->getImageStringData($base64 = true).'" alt="'.$objTextRun->getName().'"></br>Значение из файла: ';
					$body .= $objTextRun->getName().'</div>';
					/*echo "<pre>";
					print_r($font);
					break;*/
				}
				

				
			}
		}


		if (get_class($e) === 'PhpOffice\PhpWord\Element\ListItemRun') {
			foreach($e->getElements() as $objListItemRun) {
			
					$font = $objListItemRun->getFontStyle();
					$size = $font->getSize()/10;
					$bold = $font->isBold() ? 'font-weight:700' :'';
					$color = $font->getColor();
					$fontFamily = $font->getName();
					$body .= '<span style="font-size:' . $size . 'em;font-family:' . $fontFamily . '; '.$bold.'; color:#'.$color.'">';
					$body .= $objListItemRun->getText().'</span>';
					//echo "<pre>";
					//print_r($objListItemRun);
					//break;
				
			}
			
		}
		
		else if(get_class($e) === 'PhpOffice\PhpWord\Element\TextBreak') {
			$body .= '<br />';
		}
		
		else if(get_class($e) === 'PhpOffice\PhpWord\Element\Table') {
			$body .= '<table border="2px">';
			
			$rows = $e->getRows();
			
			foreach($rows as $row) {
				$body .= '<tr>';
				
				$cells = $row->getCells();
				foreach($cells as $cell) {
					$body .= '<td style="width:'.$cell->getWidth().'">';
					$celements = $cell->getElements();
					foreach($celements as $celem) {
						if(get_class($celem) === 'PhpOffice\PhpWord\Element\Text') {
							$body .= $celem->getText();
						}
						
						else if(get_class($celem) === 'PhpOffice\PhpWord\Element\TextRun') {
							foreach($celem->getElements() as $text) {
								$body .= $text->getText();
							}
						}
						else {
							//$body .= get_class($celem);
						}
					}	
					$body .= '</td>';
				}
				
				$body .= '</tr>';
			}
			
			
			$body .= '</table>';
		}
		/*else if (get_class($e)==='PhpOffice\PhpWord\Element\ListItem'){
               $list = new \PhpOffice\PhpWord\Style\ListItem();
               $listType .= $list->getListType();
               if($listType === 7) {
                   $lts = '<ol>';
                   $lte = '</ol>';
               }
               else if($listType === 3) {
                   $lts = '<ul>';
                   $lte = '</ul>';
               }
                           $body .='<ul style="font-size:14px; color:black; font-family:Times-New-Roman;>';

                                  $ee = 'PhpOffice\PhpWord\Element\ListItem';

                                   $obj = $e->getTextObject();


                                       $body .='<li style="color:'.$color.';">';

                                      if(get_class($obj)==='PhpOffice\PhpWord\Element\Text'){


                                           $body .=$obj->getText();

                                       }


                                   $body .='</li>';

                            $body .='</ul>';
           }*/
		else {
			$body .= $e->getText();
		}
	}
	
	break;
}

include 'templ.php';

